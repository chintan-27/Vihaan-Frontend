<script>
  import { Router, Route, Link } from "svelte-navigator";
	import HomeScreen from "./screens/HomeScreen.svelte"
  import LoginScreen from "./screens/LoginScreen.svelte"
  import RegisterScreen from "./screens/RegisterScreen.svelte"
  import Navbar from "./Components/Navbar/Navbar.svelte"
  import DATA from "./Data/data";


</script>
  <Router>
    <Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />

    <Route  path="/">
      <HomeScreen />
    </Route>

    <Route path="/login">
      <LoginScreen />
    </Route>

    
    <Route path="/register">
      <RegisterScreen />
    </Route>

  </Router>
  <!-- Navbar -->
