<script>
    //Card class which is used for all the card's on the display
    import Card from './card.svelte'

    //Images to be used for the card elements.
    import titanic from '../assets/titanic.jpg'
    import databaseImage from '../assets/database_image.jpg'
    import AI from '../assets/ai.jpg'


</script>

<!-- Grid layout which holds all the cards-->
<div class="h-fit w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">

    <!-- Titanic Project Card-->
    <Card 
      image={titanic} alt={"The titanic, by David Do from pixabay."} 
      title={"Titantic Machine Learning"} 
      text={"I learned to create a machine learning model with Pandas and Scikit Learn."} 
      buttonText={"Github"} 
      url={"https://github.com"}
    />

    <!-- Database project card-->
    <Card 
      image={databaseImage} alt={"Numbers in green text like the matrix"} 
      title={"Database Project"} 
      text={"I created a database from scratch using SQL server, and performed queries and transactions."} 
      buttonText={"Github"} 
      url={"https://github.com/JackOSheaDev/DatabaseTechProject"}
    />

    <!-- AI Feud project-->
    <Card 
      image={AI} alt={"Chemical bonds"} 
      title={"A.I Feud"} 
      text={"I created a guessing game powered by Azure Cognitive Vision to analyse images using Python."} 
      buttonText={"Github"} 
      url={"https://github.com/JackOSheaDev/AI-Feud"}
    />
    
    <!-- More cards can be added below-->
    

    
  </div>