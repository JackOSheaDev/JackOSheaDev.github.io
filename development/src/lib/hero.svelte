<script>
    //Import the hero image to be used as the background.
    import heroImage from '../../src/assets/scenic_background.jpg';
    
    //Create a function to navigate to a set ID.
    function navigateToStart()
    {
        location.href = "#About";
    }

</script>

<!-- Create a background of full height and max width with a gradient of red to blue -->
<div class="h-screen w-full" style="background-image: url({heroImage});">
  <!--Create a flex layout with the items centered vertically and horizontally-->
  <div class="flex flex-col items-center justify-center h-screen">
    
    <!-- Header for the website -->
    <h1 class="header">Welcome to my Website</h1>
    
    <!-- Info section about me-->
    <p class="info">My name is Jack O'Shea.</p>
    <p class="info">I'm a developer.</p>
    <p class="info mb-5">This is my portfolio.</p>
    
    
    <!-- Button which brings the user to the navbar element -->
    <button class="btn btn-secondary" on:click="{navigateToStart}"><span class="text-slate-100 font-mono font-bold">Learn more</span></button>

  </div>
</div>

<style>
  .header{
    @apply text-slate-100 font-mono font-bold text-5xl mb-5 break-normal text-center;
  }

  .info{
    @apply text-slate-100 font-mono font-bold text-2xl break-normal text-center;
  }
  
</style>



