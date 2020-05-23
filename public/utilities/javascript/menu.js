let menuDiv = document.getElementById('nav');

let menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/index.html">Ross' Algo Prep</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Data Structures</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/content/data_structures/arrays_and_strings.html">Arrays and Strings</a>
        <a class="dropdown-item" href="/content/data_structures/arrays_and_strings.html">Linked Lists</a>
        <a class="dropdown-item" href="/content/data_structures/stacks_and_queues.html">Stacks and Queues</a>
        <a class="dropdown-item" href="/content/data_structures/trees_and_graphs.html">Trees and Graphs</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/content/data_structures/data_structures.html">Data Structures</a>
      </div>
    </div>
    <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Concepts and Algorithms</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/content/concepts_and_algorithms/bit_manipulation.html">Bit Manipulation</a>
        <a class="dropdown-item" href="/content/concepts_and_algorithms/concepts_and_algorithms.html">Magic and
          Logic Puzzles</a>
        <a class="dropdown-item" href="/content/concepts_and_algorithms/object-oriented_design.html">Object Oriented
          Design</a>
        <a class="dropdown-item"
          href="/content/concepts_and_algorithms/recursion_and_dynamic_programming.html">Recursion and Dynamic
          Programming</a>
        <a class="dropdown-item" href="/content/concepts_and_algorithms/system_design_and_scalability.html">System
          Design and Scalability</a>
        <a class="dropdown-item" href="/content/concepts_and_algorithms/sorting_and_searching.html">Sorting and
          Searching</a>
        <a class="dropdown-item" href="/content/concepts_and_algorithms/testing.html">Testing</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/content/concepts_and_algorithms/concepts_and_algorithms.html">Concepts and
          Algorithms</a>
      </div>
    </div>
    <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="/content/knowledge_based/knowledge_based.html" id="navbarDropdown"
        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Knowledge Based</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/content/knowledge_based/c_and_c++.html">C and C++</a>
        <a class="dropdown-item" href="/content/knowledge_based/java.html">Java</a>
        <a class="dropdown-item" href="/content/knowledge_based/databases.html">Databases</a>
        <a class="dropdown-item" href="/content/knowledge_based/threads_and_locks.html">Threads and Locks</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/content/knowledge_based/knowledge_based.html">Knowledge Based</a>
      </div>
    </div>
    <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="/content/knowledge_based/knowledge_based.html" id="navbarDropdown"
        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Additional Review
        Problems</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/content/additional_review_problems/moderate.html">Moderate</a>
        <a class="dropdown-item" href="/content/additional_review_problems/">Hard</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/content/additional_review_problems/additional_review_problems.html">Additional Review Problems</a>
      </div>
    </div>
  </div>
</div>
</nav>
`;

menuDiv.innerHTML = menu;