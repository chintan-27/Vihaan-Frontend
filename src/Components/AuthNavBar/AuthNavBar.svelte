<script>
  import {  Link,useLocation } from "svelte-navigator";
   const location = useLocation();
  export let navlists = [];
  export let header;
  console.log(navlists);
  $:console.log(location.pathname)
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar">
  <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      {header}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
         <li class="nav-item">
          <Link class="nav-link light-color" to="/"><a>Home</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link light-color" to="login"><a>Login</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link light-color" to="register"><a>Register</a></Link>
            
        </li>
      </ul>
    </div>
  </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navbar {
    padding: 0 20px !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a {
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    text-align: left;
  }
</style>