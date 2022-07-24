<script>
    //Parameters to be accessed by the parent to control the card.
    export let image;
    export let alt;
    export let title;
    export let text;
    export let buttonText;
    export let url;
</script>



  
<!-- Create the div which houses the card-->
<div class=" w-56 h-96 rounded-md flex flex-col">
    <!-- Create a image part which takes 2/5 of the height and full width-->
    <div class =" w-fill h-2/5 z-30 ">
        <img alt="{alt}" src="{image}" class="h-full w-full rounded-t-lg aspect-video">
    </div>

    <!-- Create a text part which takes 5/5 of the height and full width-->
    <div class ="w-fill h-3/5 rounded-b-lg glass -mt-1">
        <!-- Create a text section which taks 3/5 of the enclosing div-->
        <div class ="flex h-3/5 justify-center flex-col">
            <h1 class="text-slate-100 font-sans font-bold text-2xl mt-5 break-normal text-center">{title}</h1>
            <p class="text-slate-100 font-sans font-bold text-sm mt-5 break-normal text-center ml-1 mr-1">{text}</p>
        </div>
        <!-- Create a button section which taks 3/5 of the enclosing div-->
        <div class ="flex h-4/5 justify-center items-baseline mt-5">
            <a href="{url}" class="btn w-1/2">{buttonText}</a>
        </div>
    </div>
</div>