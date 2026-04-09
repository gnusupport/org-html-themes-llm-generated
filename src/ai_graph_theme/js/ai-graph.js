/**
 * AI Graph Theme - Force-Directed Graph Navigation
 * Uses D3.js to create interactive graph visualization
 * Nodes represent document headings, links represent hierarchy
 */

(function() {
  'use strict';

  // D3 Graph State
  let simulation = null;
  let svg = null;
  let nodes = [];
  let links = [];
  let width, height;
  let zoomBehavior = null;

  /**
   * Initialize the AI Graph
   */
  function init() {
    // Wait for DOM and D3 to be ready
    if (typeof d3 === 'undefined') {
      console.error('AI Graph: D3.js not loaded');
      return;
    }

    // Create necessary DOM elements if they don't exist
    createRequiredElements();

    // Hide loading indicator
    const loading = document.getElementById('ai-loading');
    if (loading) {
      loading.style.display = 'none';
    }

    // Get container dimensions
    const container = document.getElementById('ai-graph-container');
    if (!container) {
      console.warn('AI Graph: Container not found');
      return;
    }

    width = container.offsetWidth;
    height = container.offsetHeight;

    // Create SVG
    svg = d3.select('#ai-graph-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Add zoom behavior
    zoomBehavior = d3.zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoomBehavior);

    // Create grouping element
    const g = svg.append('g');
    window.aiGraphGroup = g; // Make accessible

    // Parse document to create nodes and links
    createGraphFromDocument();

    // Start simulation
    startSimulation();

    // Add global event listeners
    document.addEventListener('keydown', handleGlobalKeys);
    
    // Add tooltip event listeners
    addTooltipListeners();

     // Add help panel toggle
    addHelpToggle();

    // Build sidebar navigation
    buildSidebarNavigation();

    // Add layout toggle button
    addLayoutToggle();

    console.log('AI Graph initialized with', nodes.length, 'nodes');
  }

  /**
    * Create required DOM elements if they don't exist
    */
  function createRequiredElements() {
    // Create graph container if missing
    if (!document.getElementById('ai-graph-container')) {
      const container = document.createElement('div');
      container.id = 'ai-graph-container';
      container.style.cssText = 'width: 100%; height: 600px; min-height: 400px; background: #0a0a1a; border-radius: 8px; margin: 2em 0; overflow: hidden; position: relative;';
      document.body.insertBefore(container, document.body.firstChild);
    }

    // Create tooltip if missing
    if (!document.getElementById('ai-tooltip')) {
      const tooltip = document.createElement('div');
      tooltip.id = 'ai-tooltip';
      tooltip.style.cssText = 'position: absolute; background: rgba(0, 0, 0, 0.9); color: #00ffff; padding: 8px 12px; border-radius: 4px; font-size: 13px; pointer-events: none; z-index: 1000; display: none; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); border: 1px solid #00ffff44;';
      document.body.appendChild(tooltip);
    }

    // Create legend if missing
    if (!document.getElementById('ai-legend')) {
      const legend = document.createElement('div');
      legend.id = 'ai-legend';
      legend.style.cssText = 'position: absolute; top: 10px; right: 10px; background: rgba(10, 10, 26, 0.95); border: 1px solid #9D4EDD; border-radius: 6px; padding: 12px; z-index: 100; font-family: "Exo 2", sans-serif; color: #e0e0e0;';
      legend.innerHTML = '<h4 style="margin: 0 0 8px 0; color: #9D4EDD; font-size: 14px;">Node Legend</h4>' +
        '<div class="legend-item" style="display: flex; align-items: center; margin-bottom: 6px;"><div class="legend-color" style="background: #FF6B6B; width: 20px; height: 20px; border-radius: 50%; margin-right: 8px;"></div><span class="legend-label">Document</span></div>' +
        '<div class="legend-item" style="display: flex; align-items: center; margin-bottom: 6px;"><div class="legend-color" style="background: #9D4EDD; width: 16px; height: 16px; border-radius: 50%; margin-right: 8px;"></div><span class="legend-label">Section (H1)</span></div>' +
        '<div class="legend-item" style="display: flex; align-items: center; margin-bottom: 6px;"><div class="legend-color" style="background: #00D4FF; width: 12px; height: 12px; border-radius: 50%; margin-right: 8px;"></div><span class="legend-label">Subsection (H2)</span></div>' +
        '<div class="legend-item" style="display: flex; align-items: center;"><div class="legend-color" style="background: #00FFFF; width: 10px; height: 10px; border-radius: 50%; margin-right: 8px;"></div><span class="legend-label">Detail (H3)</span></div>';
      document.body.appendChild(legend);
    }

    // Create help panel if missing
    if (!document.getElementById('ai-help')) {
      const help = document.createElement('div');
      help.id = 'ai-help';
      help.style.cssText = 'position: absolute; bottom: 10px; right: 10px; background: rgba(10, 10, 26, 0.95); border: 1px solid #00D4FF; border-radius: 6px; padding: 12px; z-index: 100; font-family: "Exo 2", sans-serif; color: #e0e0e0;';
      help.innerHTML = '<h4 style="margin: 0 0 8px 0; color: #00D4FF; font-size: 14px;">Controls</h4>' +
        '<ul style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 1.6;">' +
        '<li><kbd style="background: rgba(0,212,255,0.2); padding: 2px 6px; border-radius: 3px; border: 1px solid #00D4FF;">Click</kbd> node to navigate</li>' +
        '<li><kbd style="background: rgba(0,212,255,0.2); padding: 2px 6px; border-radius: 3px; border: 1px solid #00D4FF;">Drag</kbd> node to move</li>' +
        '<li><kbd style="background: rgba(0,212,255,0.2); padding: 2px 6px; border-radius: 3px; border: 1px solid #00D4FF;">Scroll</kbd> to zoom</li>' +
        '<li><kbd style="background: rgba(0,212,255,0.2); padding: 2px 6px; border-radius: 3px; border: 1px solid #00D4FF;">Esc</kbd> to reset view</li>' +
        '</ul>';
      document.body.appendChild(help);
    }

    // Create loading indicator if missing
    if (!document.getElementById('ai-loading')) {
      const loading = document.createElement('div');
      loading.id = 'ai-loading';
      loading.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #00ffff; font-family: "Orbitron", sans-serif; font-size: 18px; background: rgba(10, 10, 26, 0.9); padding: 16px 24px; border-radius: 8px; border: 1px solid #00ffff44;';
      loading.textContent = 'Building Graph...';
      document.body.appendChild(loading);
    }

    // Create sidebar for two-column layout if needed
    if (!document.getElementById('ai-sidebar')) {
      const sidebar = document.createElement('aside');
      sidebar.id = 'ai-sidebar';
      sidebar.style.cssText = 'position: fixed; left: 20px; top: 20px; bottom: 20px; width: 320px; background: linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(10, 14, 39, 0.85) 100%); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 12px; padding: 40px; overflow-y: auto; z-index: 20; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);';
      
      const navHTML = `
        <nav style="padding: 20px;">
          <h3 style="font-family: 'Orbitron', sans-serif; color: #00D4FF; margin-bottom: 20px; font-size: 18px;">Navigation</h3>
          <ul id="sidebar-nav" style="list-style: none; padding: 0; margin: 0;"></ul>
        </nav>
      `;
      
      sidebar.innerHTML = navHTML;
      document.body.appendChild(sidebar);
    }

    // Create main content area for two-column layout if needed
    if (!document.getElementById('ai-main-content')) {
      const main = document.createElement('main');
      main.id = 'ai-main-content';
      main.style.cssText = 'margin-left: 360px; padding: 60px 40px; max-width: calc(100vw - 400px); min-height: 100vh;';
      document.body.appendChild(main);
    }
  }

  /**
    * Create graph structure from document headings
    */
  function createGraphFromDocument() {
    nodes = [];
    links = [];

    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    const headingStack = []; // Stack for tracking parent headings

    headings.forEach((heading, index) => {
      // Get heading level
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent.trim();
      const id = heading.id || `heading-${index}`;

      // Determine node properties based on level
      let radius, color;
      switch (level) {
        case 1:
          radius = 40;
          color = '#9D4EDD'; // Purple
          break;
        case 2:
          radius = 25;
          color = '#00D4FF'; // Cyan
          break;
        case 3:
          radius = 15;
          color = '#00FFFF'; // Light cyan
          break;
        default:
          radius = 12;
          color = '#FFFFFF';
      }

      // Create node
      const node = {
        id: id,
        heading: heading,
        level: level,
        text: text,
        radius: radius,
        color: color,
        x: width / 2 + (Math.random() - 0.5) * 100,
        y: height / 2 + (Math.random() - 0.5) * 100,
        vx: 0,
        vy: 0
      };

      nodes.push(node);

      // Create link to parent if exists
      if (level > 1) {
        // Pop stack until we find parent level
        while (headingStack.length > 0 && 
               headingStack[headingStack.length - 1].level >= level) {
          headingStack.pop();
        }

        if (headingStack.length > 0) {
          const parent = headingStack[headingStack.length - 1];
          links.push({
            source: parent.id,
            target: id,
            value: 1
          });
        }
      }

      // Push current heading to stack
      headingStack.push(node);
    });

    // Add document root node
    const root = {
      id: 'root',
      heading: document.body,
      level: 0,
      text: document.title || 'Document',
      radius: 60,
      color: '#FF6B6B',
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0
    };
    nodes.unshift(root);

    // Create links from root to all H1s
    nodes.filter(n => n.level === 1).forEach(node => {
      links.push({
        source: 'root',
        target: node.id,
        value: 1
      });
    });
  }

  /**
   * Start D3 force simulation
   */
  function startSimulation() {
    // Create force simulation
    simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links)
        .id(d => d.id)
        .distance(d => linkDistance(d)))
      .force('charge', d3.forceCharge(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(d => d.radius + 10))
      .on('tick', ticked);

    // Add drag behavior
    const drag = d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);

    // Draw elements
    drawNodes();
    drawLinks();
    drawLabels();

    // Apply drag to nodes
    svg.selectAll('.graph-node')
      .call(drag);
  }

  /**
   * Calculate link distance based on node levels
   */
  function linkDistance(d) {
    const sourceLevel = getNodeLevel(d.source);
    const targetLevel = getNodeLevel(d.target);
    const levelDiff = Math.abs(sourceLevel - targetLevel);
    
    if (levelDiff === 0) return 150;
    if (levelDiff === 1) return 120;
    return 100;
  }

  /**
   * Get node level by ID
   */
  function getNodeLevel(id) {
    const node = nodes.find(n => n.id === id);
    return node ? node.level : 0;
  }

  /**
   * Ticked - called on each simulation tick
   */
  function ticked() {
    svg.selectAll('.graph-node')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    svg.selectAll('.graph-link')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    svg.selectAll('.graph-label')
      .attr('x', d => d.x)
      .attr('y', d => d.y + d.radius + 15);
  }

  /**
   * Draw links between nodes
   */
  function drawLinks() {
    const link = svg.append('g')
      .selectAll('.graph-link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'graph-link')
      .attr('stroke', 'rgba(255, 255, 255, 0.15)')
      .attr('stroke-width', d => Math.max(1, d.source.radius * 0.05));
  }

  /**
   * Draw node circles
   */
  function drawNodes() {
    const node = svg.append('g')
      .selectAll('.graph-node')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'graph-node')
      .attr('r', d => d.radius)
      .attr('fill', d => d.color)
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('click', nodeClicked)
      .on('mouseenter', nodeMouseEnter)
      .on('mouseleave', nodeMouseLeave);

    // Add glow effect
    node.append('filter')
      .attr('id', d => `glow-${d.id}`)
      .append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');

    const glow = svg.append('defs');
    nodes.forEach(node => {
      glow.append('filter')
        .attr('id', `node-glow-${node.id}`)
        .append('feGaussianBlur')
        .attr('stdDeviation', '4')
        .attr('result', 'coloredBlur');
      
      const filteredNode = svg.selectAll('.graph-node')
        .filter(d => d.id === node.id);
      
      filteredNode.append('circle')
        .attr('class', 'node-glow')
        .attr('r', node.radius + 5)
        .attr('fill', node.color)
        .attr('opacity', 0.3)
        .attr('filter', `url(#node-glow-${node.id})`);
    });
  }

  /**
   * Draw node labels
   */
  function drawLabels() {
    const label = svg.append('g')
      .selectAll('.graph-label')
      .data(nodes)
      .enter()
      .append('text')
      .attr('class', 'graph-label')
      .attr('text-anchor', 'middle')
      .attr('fill', '#FFFFFF')
      .attr('font-size', d => Math.max(10, d.radius * 0.35) + 'px')
      .attr('font-family', 'Orbitron, sans-serif')
      .attr('font-weight', '500')
      .text(d => {
        // Truncate long text
        const maxChars = Math.max(8, d.radius * 0.6);
        return d.text.length > maxChars ? d.text.substring(0, maxChars - 2) + '...' : d.text;
      })
      .style('pointer-events', 'none')
      .style('text-shadow', '0 1px 3px rgba(0, 0, 0, 0.8)');
  }

  /**
   * Handle node click - navigate to section
   */
  function nodeClicked(event, d) {
    event.stopPropagation();

    // Highlight selected node
    svg.selectAll('.graph-node')
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', 2);

    svg.selectAll('.graph-node')
      .filter(node => node.id === d.id)
      .attr('stroke', '#FF6B6B')
      .attr('stroke-width', 4);

    // Scroll to section
    const element = document.getElementById(d.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Remove highlight after animation
      setTimeout(() => {
        svg.selectAll('.graph-node')
          .attr('stroke', '#FFFFFF')
          .attr('stroke-width', 2);
      }, 2000);
    }
  }

  /**
   * Show tooltip on mouse enter
   */
  function nodeMouseEnter(event, d) {
    const tooltip = document.getElementById('ai-tooltip');
    if (tooltip) {
      tooltip.innerHTML = `
        <div class="tooltip-level">${getLevelLabel(d.level)}</div>
        <div class="tooltip-text">${escapeHtml(d.text)}</div>
      `;
      tooltip.classList.add('visible');
      
      // Position tooltip near cursor
      updateTooltipPosition(event);
    }
  }

  /**
   * Hide tooltip on mouse leave
   */
  function nodeMouseLeave() {
    const tooltip = document.getElementById('ai-tooltip');
    if (tooltip) {
      tooltip.classList.remove('visible');
    }
  }

  /**
   * Update tooltip position
   */
  function updateTooltipPosition(event) {
    const tooltip = document.getElementById('ai-tooltip');
    if (tooltip) {
      const padding = 15;
      let x = event.clientX + padding;
      let y = event.clientY + padding;

      // Keep tooltip within viewport
      const rect = tooltip.getBoundingClientRect();
      if (x + rect.width > window.innerWidth) {
        x = event.clientX - rect.width - padding;
      }
      if (y + rect.height > window.innerHeight) {
        y = event.clientY - rect.height - padding;
      }

      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    }
  }

  /**
   * Get level label
   */
  function getLevelLabel(level) {
    const labels = ['Root', 'Section', 'Subsection', 'Detail'];
    return labels[Math.min(level, labels.length - 1)] || 'Node';
  }

  /**
   * HTML escape helper
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Drag behavior handlers
   */
  function dragstarted(event, d) {
    if (!event.active) {
      simulation.alphaTarget(0.3).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) {
      simulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
  }

  /**
   * Add tooltip mouse move listener
   */
  function addTooltipListeners() {
    document.addEventListener('mousemove', (e) => {
      const tooltip = document.getElementById('ai-tooltip');
      if (tooltip && tooltip.classList.contains('visible')) {
        updateTooltipPosition(e);
      }
    });
  }

  /**
   * Add help panel toggle
   */
  function addHelpToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '❓';
    toggleBtn.style.cssText = `
      position: fixed;
      top: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(0, 212, 255, 0.2);
      border: 2px solid rgba(0, 212, 255, 0.5);
      color: #00D4FF;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 1000;
      transition: all 0.3s ease;
    `;
    toggleBtn.onmouseover = () => {
      toggleBtn.style.background = 'rgba(0, 212, 255, 0.4)';
    };
    toggleBtn.onmouseout = () => {
      toggleBtn.style.background = 'rgba(0, 212, 255, 0.2)';
    };
    toggleBtn.onclick = () => {
      const help = document.getElementById('ai-help');
      if (help) {
        help.style.display = help.style.display === 'none' ? 'block' : 'none';
      }
    };
    document.body.appendChild(toggleBtn);
  }

  /**
   * Handle global keyboard shortcuts
   */
  function handleGlobalKeys(e) {
    // Escape to reset view
    if (e.key === 'Escape') {
      resetView();
    }
  }

 /**
    * Reset zoom to fit all nodes
    */
  function resetView() {
    if (svg) {
      svg.transition().call(zoomBehavior.transform, d3.zoomIdentity);
    }
  }

  /**
    * Build sidebar navigation tree
    */
  function buildSidebarNavigation() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    nav.innerHTML = '';
    
    // Get all headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    let currentLevel = 0;
    let parentUl = nav;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent.trim();
      const id = heading.id;
      
      // Adjust indentation based on level
      while (level <= currentLevel) {
        parentUl = parentUl.parentElement;
        currentLevel--;
      }
      
      // Create list item
      const li = document.createElement('li');
      li.style.cssText = 'margin-bottom: 8px;';
      
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = text;
      a.style.cssText = 'color: #B0B8C7; text-decoration: none; display: block; padding: 6px 12px; border-radius: 4px; transition: all 0.2s ease; font-size: 14px; line-height: 1.4;';
      
      // Add hover effect
      a.onmouseenter = () => {
        a.style.color = '#00D4FF';
        a.style.background = 'rgba(0, 212, 255, 0.1)';
      };
      a.onmouseleave = () => {
        a.style.color = '#B0B8C7';
        a.style.background = 'transparent';
      };
      a.onclick = (e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      
      li.appendChild(a);
      parentUl.appendChild(li);
      
      // Create nested list for child headings
      if (level > currentLevel) {
        const nestedUl = document.createElement('ul');
        nestedUl.style.cssText = 'list-style: none; padding-left: 20px; margin: 4px 0 0 0;';
        li.appendChild(nestedUl);
        parentUl = nestedUl;
        currentLevel = level;
      }
    });
  }

  /**
    * Toggle between full-page and two-column layouts
    */
  function toggleLayout() {
    const overlay = document.getElementById('ai-content-overlay');
    const sidebar = document.getElementById('ai-sidebar');
    const main = document.getElementById('ai-main-content');
    
    if (!overlay) return;
    
    const isTwoColumn = overlay.classList.toggle('two-column');
    
    if (isTwoColumn && sidebar && main) {
      sidebar.style.display = 'block';
      main.style.display = 'block';
    } else {
      if (sidebar) sidebar.style.display = 'none';
      if (main) main.style.display = 'none';
    }
  }

  /**
    * Add layout toggle button
    */
  function addLayoutToggle() {
    const toggleBtn = document.getElementById('ai-layout-toggle');
    if (toggleBtn) return; // Already exists
    
    const btn = document.createElement('button');
    btn.id = 'ai-layout-toggle';
    btn.innerHTML = '⊞';
    btn.title = 'Toggle Layout';
    btn.style.cssText = `
      position: fixed;
      top: 2rem;
      right: 8rem;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(0, 212, 255, 0.2);
      border: 2px solid rgba(0, 212, 255, 0.5);
      color: #00D4FF;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 999;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    btn.onmouseover = () => {
      btn.style.background = 'rgba(0, 212, 255, 0.4)';
      btn.style.borderColor = '#00D4FF';
    };
    btn.onmouseout = () => {
      btn.style.background = 'rgba(0, 212, 255, 0.2)';
      btn.style.borderColor = 'rgba(0, 212, 255, 0.5)';
    };
    btn.onclick = () => toggleLayout();
    document.body.appendChild(btn);
  }

  /**
   * Handle window resize
   */
  function handleResize() {
    const container = document.getElementById('ai-graph-container');
    if (!container) return;

    width = container.offsetWidth;
    height = container.offsetHeight;

    svg.attr('width', width).attr('height', height);

    simulation.force('center', d3.forceCenter(width / 2, height / 2));
    simulation.alpha(0.3).restart();
  }

  /**
   * Initialize on DOM ready
   */
  function initialize() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    // Add resize listener
    window.addEventListener('resize', handleResize);
  }

  // Start initialization
  initialize();

})();
