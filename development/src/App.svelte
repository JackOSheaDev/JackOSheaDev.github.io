<script lang="ts">
  //=====Importing Components=====

  //Hero section used for the main screen when opening the website.
  import Hero from './lib/hero.svelte'
  //Navbar section used for navigation around the website.
  import Navbar from './lib/navbar.svelte'
  //About section used for personal information and my socials.
  import About from './lib/about.svelte'
  //Education section used for my projects.
  import Education from './lib/education.svelte'
  //Grades section used to show my grades throughout college.
  import Grades from './lib/grades.svelte';
  //Card manager used to display my projects made in my personal time.
  import Cardmanager from './lib/cardmanager.svelte';
  

  //Bind Navbar component to a variable to acess it's child function.
  let navbarComponent: Navbar;

  
  
  //Set up an observer to check when sections are in viewport and update the navigation bar.
  function actionWhenInViewport(e: Element) 
  {
    const observer = new IntersectionObserver(entries => 
    {
      if(entries[0].isIntersecting) {
        console.log(e.id)
        //Modify the Navbar highlighting.
        navbarComponent.setState(e.id)

      }
    });

  //Start observer to check for location within website.
  observer.observe(e);
}
  
</script> 


<!-- Main Class which is assembled into the website -->
<main id="main">

  
  <!-- Hero element used as the introduction to the website -->
  <Hero/>


  <!-- Navbar element allowing user to navigate around the website. Bind is used to map the element to a variable -->
  <Navbar bind:this = {navbarComponent} />


  <!-- Spacer div with ID for offset-->
  <div use:actionWhenInViewport id="About" class="spacer"></div>

  <!-- Text which reveals the section name -->
  <h1 class="main_heading">About Me</h1>

  <!-- Element for about section -->
  <About/>
  
  
  <!-- Spacer div with ID for offset-->
  <div use:actionWhenInViewport id="Education" class="spacer"></div>

  <!-- Text which reveals the section name -->
  <h1 class="main_heading">Education</h1>

  <!-- Element for education section-->
  <Education/>


  <!--Spacer between education section-->
  <div class="spacer"></div>

  <!--Education part 2-->
  <Grades/>



  <!-- Spacer div with ID for offset-->
  <div use:actionWhenInViewport id="Projects" class="spacer"></div>

  <!-- Text which reveals the section name -->
  <h1 class="main_heading">Projects</h1>

  <!-- Card manager for all the completed projects-->
  <Cardmanager/>
  
</main>

<style>
  /* Styling for the main page is handled with tailwind with apply directives to allow for easier development and reuse. */
  .spacer
  {
    @apply h-20 w-full;
  }
  .main_heading
  {
    @apply text-slate-100 font-mono font-bold text-5xl mb-5 break-normal text-center;
  }
</style>





