<script>
    //Use custom Carousel component used for videos and images
    import Carousel from '../lib/carousel.svelte'
    
</script>

<!-- Div which is used to hold the information and a carousel in a flex layout.-->
<div class="h-max w-full flex flex-col md:flex-row md:justify-evenly items-center gap-4">

    <!-- Information section-->
    <div class="flex flex-col  items-center gap-4">
      <h2 class="text-slate-100 font-mono text-2xl break-normal text-center">I am about to enter my third year of college.</h2>
      <p class="text-slate-100 font-mono break-normal text-center">The projects in the carousel were made during 2nd year of College</p>
    </div>
  
   
    
    <!-- Carousel Code -->
    <Carousel/>
  
  </div>