/**
 * Org Mode Keyboard Shortcuts
 * Based on bigblow theme functionality
 * Includes: dashboard, navigation, collapse/expand, tasks, reload
 */

(function() {
  'use strict';

  // Keyboard shortcut handler
  function handleKeydown(e) {
    // Don't trigger shortcuts when typing in input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    var key = e.key.toLowerCase();
    var shiftKey = e.shiftKey;

    switch (key) {
      // Dashboard / Help
      case '?':
      case 'h':
        e.preventDefault();
        toggleDashboard();
        break;

      // Navigation
      case 'n':
        e.preventDefault();
        goToNextHeading();
        break;

      case 'p':
        e.preventDefault();
        goToPreviousHeading();
        break;

      // Scrolling
      case 'b':
        e.preventDefault();
        scrollUp();
        break;

      case '<':
        e.preventDefault();
        scrollToTop();
        break;

      case '>':
        e.preventDefault();
        scrollToBottom();
        break;

      // Collapse/Expand
      case '-':
        e.preventDefault();
        collapseAll();
        break;

      case '+':
        e.preventDefault();
        expandAll();
        break;

      // Task navigation (for TODO items)
      case 'r':
        if (!shiftKey) {
          e.preventDefault();
          goToNextTask();
        }
        break;

      case 'r':
        if (shiftKey) {
          e.preventDefault();
          goToPreviousTask();
        }
        break;

      // Stop reviewing
      case 'q':
        e.preventDefault();
        stopReviewing();
        break;

      // Reload
      case 'g':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          location.reload();
        }
        break;
    }
  }

  // Toggle dashboard/help panel
  function toggleDashboard() {
    var dashboard = document.getElementById('keyboard-dashboard');
    
    if (!dashboard) {
      // Create dashboard if it doesn't exist
      dashboard = document.createElement('div');
      dashboard.id = 'keyboard-dashboard';
      dashboard.className = 'keyboard-dashboard';
      dashboard.innerHTML = getDashboardHTML();
      document.body.appendChild(dashboard);
    }
    
    dashboard.style.display = dashboard.style.display === 'block' ? 'none' : 'block';
  }

  // Dashboard HTML template
  function getDashboardHTML() {
    return `
      <div class="keyboard-dashboard-overlay"></div>
      <div class="keyboard-dashboard-panel">
        <h3>Keyboard Shortcuts</h3>
        <table>
          <tr><td><kbd>?</kbd> or <kbd>h</kbd></td><td>Dashboard (help)</td></tr>
          <tr><td><kbd>n</kbd></td><td>Next heading</td></tr>
          <tr><td><kbd>p</kbd></td><td>Previous heading</td></tr>
          <tr><td><kbd>b</kbd></td><td>Scroll up</td></tr>
          <tr><td><kbd>&lt;</kbd></td><td>Scroll to top</td></tr>
          <tr><td><kbd>&gt;</kbd></td><td>Scroll to bottom</td></tr>
          <tr><td><kbd>-</kbd></td><td>Collapse all</td></tr>
          <tr><td><kbd>+</kbd></td><td>Expand all</td></tr>
          <tr><td><kbd>r</kbd></td><td>Next task</td></tr>
          <tr><td><kbd>Shift+r</kbd></td><td>Previous task</td></tr>
          <tr><td><kbd>q</kbd></td><td>Stop reviewing</td></tr>
          <tr><td><kbd>Ctrl+g</kbd> or <kbd>Cmd+g</kbd></td><td>Reload page</td></tr>
        </table>
        <button id="close-dashboard">Close</button>
      </div>
    `;
  }

  // Close dashboard
  function closeDashboard() {
    var dashboard = document.getElementById('keyboard-dashboard');
    if (dashboard) {
      dashboard.style.display = 'none';
    }
  }

  // Add event listener for closing dashboard
  document.addEventListener('click', function(e) {
    var dashboard = document.getElementById('keyboard-dashboard');
    var closeBtn = document.getElementById('close-dashboard');
    
    if (closeBtn && e.target === closeBtn) {
      closeDashboard();
    }
    
    // Close when clicking overlay
    if (e.target.classList.contains('keyboard-dashboard-overlay')) {
      closeDashboard();
    }
  });

  // Navigation helpers
  function goToNextHeading() {
    var headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    var current = findCurrentHeading();
    var index = headings.indexOf(current);
    
    if (index >= 0 && index < headings.length - 1) {
      headings[index + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function goToPreviousHeading() {
    var headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    var current = findCurrentHeading();
    var index = headings.indexOf(current);
    
    if (index > 0) {
      headings[index - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function findCurrentHeading() {
    var headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    var viewport = getViewport();
    
    for (var i = 0; i < headings.length; i++) {
      var rect = headings[i].getBoundingClientRect();
      if (rect.top <= viewport.height / 2) {
        return headings[i];
      }
    }
    
    return headings[0] || document.body;
  }

  function getViewport() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  }

  function scrollUp() {
    window.scrollBy({ top: -300, behavior: 'smooth' });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  // Collapse/Expand
  function collapseAll() {
    var outlines = document.querySelectorAll('.outline');
    outlines.forEach(function(el) {
      if (el.style.display !== 'none') {
        el.style.display = 'none';
      }
    });
  }

  function expandAll() {
    var outlines = document.querySelectorAll('.outline');
    outlines.forEach(function(el) {
      el.style.display = 'block';
    });
  }

  // Task navigation
  function goToNextTask() {
    var tasks = Array.from(document.querySelectorAll('.todo'));
    var current = findCurrentTask();
    var index = tasks.indexOf(current);
    
    if (index >= 0 && index < tasks.length - 1) {
      tasks[index + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (index === -1) {
      // No current task found, go to first
      tasks[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function goToPreviousTask() {
    var tasks = Array.from(document.querySelectorAll('.todo'));
    var current = findCurrentTask();
    var index = tasks.indexOf(current);
    
    if (index > 0) {
      tasks[index - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function findCurrentTask() {
    var tasks = Array.from(document.querySelectorAll('.todo'));
    var viewport = getViewport();
    
    for (var i = 0; i < tasks.length; i++) {
      var rect = tasks[i].getBoundingClientRect();
      if (rect.top <= viewport.height / 2) {
        return tasks[i];
      }
    }
    
    return tasks[0] || document.body;
  }

  function stopReviewing() {
    // Could be used to exit full-screen mode or stop auto-advance
    console.log('Stop reviewing');
  }

  // Initialize keyboard shortcuts
  function init() {
    // Add global keydown listener
    document.addEventListener('keydown', handleKeydown);
    
    // Add close button listener
    document.addEventListener('click', function(e) {
      if (e.target.id === 'close-dashboard') {
        closeDashboard();
      }
    });
    
    console.log('Keyboard shortcuts initialized');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
