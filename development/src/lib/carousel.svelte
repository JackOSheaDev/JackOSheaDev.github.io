<script>
    //Import fly transition to transition between screens.
    import {fly } from 'svelte/transition';

    //Import image to be used as a screen.
    import webDev from '../assets/web_development.png';
	
	
    //Values used in the carousel.
    let values = [
        {
            type: "Video",
            title: "Machine Learning Project 1",
            source: "https://www.youtube.com/embed/LR3jmVT92m4"
        },
        {
            type: "Video",
            title: "Machine Learning Project 2",
            source: "https://www.youtube.com/embed/LvwfaX1RHl0"
        },
        {
            type: "Video",
            title: "Microprocessors- MicroRealms",
            source: "https://www.youtube.com/embed/lQeDKvip72w"
        },
        {
            type: "Image",
            alt: "A project I made using PHP",
            source: webDev
        }
    ]
    
    //Default choice is first value.
	let chosen_value = values[0];


	

</script>

<!-- Container for the carousel-->
<div class="mt-10 mr-5 ml-5 w-3/4">

    <!-- Created a specialised version of the daisy UI carousel-->
    <div class="carousel aspect-video">
    
        <!-- Key is used to detect changes to chose_value and recreate the component -->
        {#key chosen_value}
            <!-- Checks if the media type is a youtube video -->
            {#if chosen_value.type == "Video"}

                <iframe in:fly="{{ x: 200, duration: 1600 }}" title={chosen_value.title} src={chosen_value.source} class="w-full"/>

            <!-- Otherwise it is a picture-->
            {:else}

                <img in:fly="{{ x: 200, duration: 1600 }}" src={chosen_value.source} alt={chosen_value.alt}>
                
            {/if}
                
        {/key} 
      
    </div> 

    <!-- Class which holds the buttons created dynamically according to how many options there are -->
    <div class="flex justify-center w-full py-2 gap-2">
        <!-- For each value -->
        {#each values as value}

            <!-- Create a labelled button-->
            <label>
                <input class="radio radio-secondary radio-md" type=radio bind:group={chosen_value} value={value}>
            </label>

        {/each}
    </div>
    
    
</div>
