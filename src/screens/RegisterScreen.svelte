 <svelte:head >
    <link  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>
<script >
    import {Link} from "svelte-navigator"
    import axios from "axios"
    let email = "Jay51419@gmail.com";
    let password ="password";
    let confirmPassword="password";
    async function handleSubmit(){
        const res = await axios.post("http://192.168.43.35:8000/register",{email,password})
        $:console.log(res)
    }
</script>
 <form on:submit|preventDefault={handleSubmit}  >
        <div class="flex  justify-center items-center" >
            <div class="light-bgcolor dark-color mt-8 border-color6 border-1  py-2 md:w-1/3 flex flex-col justify-center items-center mt-" >
                <h2 class="font-bold text-2xl py-4">Register</h2>

                <div class="flex flex-col w-full px-14 mb-4" >
                    <p class="text-sm text-color5" >Email</p>
                    <input bind:value={email} class="dark-color border-2 border-color1 shadow-md py-2 my-2 rounded-lg" type="email" >
                </div>

               <div class="flex flex-col w-full px-14 mb-4" >
                    <p class="text-sm text-color5" >Password</p>
                    <input type="password" bind:value={password} 
                    class="dark-color border-2  shadow-md py-2 my-2 rounded-lg" >
                </div>
                <div class="flex flex-col w-full px-14 mb-4" >
                    <p class="text-sm text-color5" >Confirm Password</p>
                    <input bind:value={confirmPassword} class="dark-color border-2 border-color1 shadow-md py-2 my-2 rounded-lg" type="password" >
                </div>
               
                <div class="flex flex-col items-center w-full px-14 mb-4" >
                    <input class="main-bgcolor border-2 w-1/2 border-color1 font-bold mb-4 shadow-md py-2 bg-color4 text-color0 transition duration-600 transform hover:scale-110 light-color" type="submit"  value="Submit">
                    <p>Already have an account? <span class=" cursor-pointer"><Link to="login" >Login</Link> </span></p>
                </div>

            </div>
        </div>
</form>


<!-- <section class="main-bgcolor light-color" id="banner">
  <img src="images/wave1.png" alt="" class="wave-img" />
</section> -->
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  section {
    position: absolute;
    top: 0;
    padding-top: 5%;
    width: 100%;
    z-index: -1;
}

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }

  .watch-btn {
    margin: auto 20px;
    position: relative;
    top: 8px;
  }

  section a {
    text-decoration: none;
  }

  .wave-img {
    width: 100%;
    height: auto;
  }
  input{
    padding-left: 5px;
  }
</style>