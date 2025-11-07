"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  element: SVGCircleElement;
}

interface Config {
  nodeCount: number;
  nodeRadius: number;
  connectionDistance: number;
  animationSpeed: number;
  bounds: {
    width: number;
    height: number;
  };
}

export default function MeshBackground() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const config: Config = {
      nodeCount: 60,
      nodeRadius: 2,
      connectionDistance: 150,
      animationSpeed: 0.2,
      bounds: {
        width: 1000,
        height: 1000,
      },
    };

    const nodes: Node[] = [];
    const nodesGroup = svgRef.current.querySelector<SVGGElement>("#nodes");
    const connectionsGroup =
      svgRef.current.querySelector<SVGGElement>("#connections");

    if (!nodesGroup || !connectionsGroup) return;

    // Criar nós
    for (let i = 0; i < config.nodeCount; i++) {
      const node: Omit<Node, "element"> = {
        x: Math.random() * config.bounds.width,
        y: Math.random() * config.bounds.height,
        vx: (Math.random() - 0.5) * config.animationSpeed,
        vy: (Math.random() - 0.5) * config.animationSpeed,
        radius: config.nodeRadius + Math.random() * 1.5,
      };

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", node.x.toString());
      circle.setAttribute("cy", node.y.toString());
      circle.setAttribute("r", node.radius.toString());
      circle.setAttribute("fill", "url(#nodeGradient)");
      circle.setAttribute("filter", "url(#nodeGlow)");

      nodesGroup.appendChild(circle);
      nodes.push({ ...node, element: circle });
    }

    nodesRef.current = nodes;

    // Função para calcular distância
    const distance = (n1: Node, n2: Node) => {
      const dx = n1.x - n2.x;
      const dy = n1.y - n2.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Função para atualizar conexões
    const updateConnections = () => {
      while (connectionsGroup.firstChild) {
        connectionsGroup.removeChild(connectionsGroup.firstChild);
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = distance(nodes[i], nodes[j]);
          if (dist < config.connectionDistance) {
            const opacity = 1 - dist / config.connectionDistance;

            const line = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "line"
            );
            line.setAttribute("x1", nodes[i].x.toString());
            line.setAttribute("y1", nodes[i].y.toString());
            line.setAttribute("x2", nodes[j].x.toString());
            line.setAttribute("y2", nodes[j].y.toString());
            line.setAttribute("stroke", "url(#lineGradient)");
            line.setAttribute("stroke-width", "0.5");
            line.setAttribute("stroke-opacity", (opacity * 0.5).toString());

            connectionsGroup.appendChild(line);
          }
        }
      }
    };

    // Função de animação
    const animate = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > config.bounds.width) node.vx *= -1;
        if (node.y < 0 || node.y > config.bounds.height) node.vy *= -1;

        node.element.setAttribute("cx", node.x.toString());
        node.element.setAttribute("cy", node.y.toString());
      }

      if (Math.random() < 0.2) updateConnections();

      animationRef.current = requestAnimationFrame(animate);
    };

    updateConnections();
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      nodesGroup.innerHTML = "";
      connectionsGroup.innerHTML = "";
    };
  }, []);

  return (
    <div className="mesh-container relative w-full h-full overflow-hidden">
      <svg
        ref={svgRef}
        className="mesh-svg absolute inset-0"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#57a69d" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#315155" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#57a69d" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#315155" stopOpacity="0.3" />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g id="connections"></g>
        <g id="nodes"></g>
      </svg>
    </div>
  );
}
