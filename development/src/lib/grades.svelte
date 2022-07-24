<!-- INFO: Eventually i will make this dynamic and have it respond to different data but for now it is hardcoded -->

<!-- Create a div which holds the info section and a table-->
<div class="h-max w-full flex flex-col md:flex-row md:justify-evenly items-center gap-4">

    <!-- Div which holds the info section-->
    <div class="flex flex-col  items-center gap-4">
      <h2 class="text-slate-100 font-mono text-2xl break-normal text-center">Notable Grades</h2>
      <p class="text-center break-normal  lg:text-left mr-5 ml-5">Here are a selection of my grades from this year </p>
    </div>

    <!-- Div which shows on desktop-->
    <div class="items-center gap-4 hidden md:flex md:flex-col">
      <div class="overflow-x-auto w-full">
        <table class="table table-zebra w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Subject:</th>
              <th>Grade:</th>
              <th>What I Learned:</th>
            </tr>
          </thead>
          
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>-</th>
              <td>OOP</td>
              <td>First</td>
              <td>Design Patterns and Programing</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>-</th>
              <td>Mathematics</td>
              <td>First</td>
              <td>Discrete Maths and how it applies to CS</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>-</th>
              <td>Networking</td>
              <td>First</td>
              <td>Cisco equipment and networking fundamentals</td>
            </tr>
            <!-- row 4-->
            <tr>
              <th>-</th>
              <td>Microprocessors</td>
              <td>First</td>
              <td>Programming in assembly and C</td>
            </tr>
    
            <!-- row 5-->
            <tr>
              <th>-</th>
              <td>OS and System Admin</td>
              <td>First</td>
              <td>Linux essentials, VMs and the kernel</td>
            </tr>
          </tbody>
        </table>
      
      
      </div>
    </div>
  

    <!-- Div which shows on mobile-->
    <div class="flex flex-col items-center gap-4  md:hidden">
      <div class="overflow-x-auto w-full">
        <table class="table table-zebra w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Subject:</th>
              <th>Grade:</th>
            </tr>
          </thead>
          
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>-</th>
              <td>OOP</td>
              <td>First</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>-</th>
              <td>Mathematics</td>
              <td>First</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>-</th>
              <td>Networking</td>
              <td>First</td>
            </tr>
            <!-- row 4-->
            <tr>
              <th>-</th>
              <td>Microprocessors</td>
              <td>First</td>
            </tr>
            <!-- row 5-->
            <tr>
              <th>-</th>
              <td>OS and System Admin</td>
              <td>First</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    
</div>
