<script lang="ts">
    // Define the text colour when active.

    let offState: string = "text-default-400"
    // Define the text colour when inactive.
    let onState: string = "text-secondary"

    // All posssible states for the navbar. 
    let states: Object = {
    "About": true,
    "Education": false,
    "Projects": false
    }

    // Function which sets the text colour of one of the elements.
    export function setState(input_value : string)
    {
        for(let [key] of Object.entries(states))
        {
          // Sets all states to false.
          states[key] = false;
        }
        // Sets the chosen state to true.
        states[input_value] = true;
    }

</script>

<!-- Create a navbar element to be sticky with the z index of 40 so elements flow behind it, used on desktop-->
<div id="navbar" class="navbar bg-base-100 sticky top-0 z-40 hidden md:flex lg:flex">
    <!-- Name of website and a button which redirects the user to the top of the screen.-->
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="#top">JackOSheaDEV</a>
    </div>

    <!-- A list of buttons that when clicked change the font colour.-->
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a on:click = {() => setState("About")} class={states["About"] === true ? onState : offState } href="#About">About</a></li>
        <li><a on:click = {() => setState("Education")} class={states["Education"] === true ? onState : offState} href="#Education">Education</a></li>
        <li><a on:click = {() => setState("Projects")} class={states["Projects"] === true ? onState : offState} href="#Projects">Projects</a></li>
      </ul>
    </div>

</div>


<!-- Create a navbar element to be sticky with the z index of 40 so elements flow behind it, used on mobile-->
<div class="navbar bg-base-100 sticky top-0 z-40 display:flex md:hidden lg:hidden">

  <!-- Name of website and a button which redirects the user to the top of the screen.-->
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="#top">JackOSheaDEV</a>
  </div>


  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li tabindex="0">
        <a class="justify-between" href="#navbar">
          Contents:
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
        </a>

        <!-- A list of buttons that when clicked change the font colour.-->
        <ul class="p-2">
          <li><a on:click = {() => setState("About")} class={states["About"] === true ? onState : offState } href="#About">About</a></li>
          <li><a on:click = {() => setState("Education")} class={states["Education"] === true ? onState : offState} href="#Education">Education</a></li>
          <li><a on:click = {() => setState("Projects")} class={states["Projects"] === true ? onState : offState} href="#Projects">Projects</a></li>
        </ul>
      
      </li>
    </ul>
  </div>
</div>
