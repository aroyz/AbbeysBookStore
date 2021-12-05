README for Assignment 2 MVC Core Application

Program Name: AbbeysBookStore
Program Purpose: Create a more advanced application using ASP.NET Core MVC
Program Author: Abbey Roy
Date Modified:

// START @ 11:35AM 11-01-2021 //
11:35AM - Created AbbeysBookStore Application
11:36AM - Created README
11:39AM - Edited Startup.cs to remove "options => options.SignIn.RequireConfirmedAccount = true" on line 35
11:41AM - Downloaded and replaced bootstrap.css for the Morph theme from Bootswatch
11:45AM - Replaced site.css with the one provided 
11:49AM - Modified _Layout.cshtml to use bootstrap.css instead of bootstrap.min.css, change the nav class from navbar-light to navbar dark and bg-white to bg-primary, and remove text-dark class from the links
11:54AM - ERROR: Application won't run because school computers don't like HTTPS. 
          FIXED: Modified launchSettings.json to comment out SSL to run on college computers.
12:02PM - Changed value of --bs-primary-rgb in bootstrap.css because I didn't like it
12:05PM - Remove text-dark class from links in _LoginPartial.cshtml
12:06PM - Added text-dark class to footer container in _Layout.cshtml
12:09PM - Added padding-top to h1 in bootstrap.css
12:12PM - Changed my mind about footer design and added bg-primary class to footer, as well as removed the text-dark class from the footer container
12:14PM - Added "text-align: center" css rule to footer
12:18PM - Changed text-muted color to be #c3cce8, which is slightly lighter than it was before (because I thought it was too hard to read when it was darker)
12:22PM - Started going back through slides because Andrew told me I'll miss things if I don't go through the slides in presentation mode!
12:25PM - Push to Github
12:35PM - Added additional stylesheets and scripts to _Layout.cshtml
12:48PM - Tried to push to github. Couldn't get it to work so uploaded to OneDrive.
\\ END @ 12:51PM 11-1-2021 \\

// START @ 10:24PM 11-02-2021 //
10:24PM - Added dropdown
10:31PM - ERROR, when running: System.IO.DirectoryNotFoundException: 'C:\Users\W0528897\.nuget\packages\microsoft.aspnetcore.identity.ui\5.0.8\staticwebassets\V4\'
          FIXED: Rebuilt solution and it ran fine.
10:40PM - Changed "Dropdown" to "Content Management"
10:42PM - Created .DataAccess, .Models, and .Utility packages
10:45PM - Moved Data folder to .DataAccess project
10:46PM - Downloaded required packages
10:53PM - Deleted Migrations folder
10:55PM - Modified namespace of ApplicationDbContext.cs in .DataAccess project
10:58PM - Deleted all default Class1.cs files
11:04PM - Got tired! Uploaded everything to GitHub
\\ END @ 11:04PM 10-02-2021 \\

// START @ 9:18AM 11-03-2021 //
9:18AM  - Moved Models folder to .Models, renamed it to ViewModels, and added project references
9:25AM  - Modified Error.cshtml to reference correct Model
9:28AM  - Changed ErrorViewModels namespace to AbbeysBookStore.Models.ViewModels
9:35AM  - ERROR, when building: There were a few reference errors where the code still referenced the old locations of the Data and Models folder.
          FIXED: Updated the references. Build successful.
9:45AM  - Created SD.cs in .Utility project and modified the class properties
9:49AM  - Added project references
9:50AM  - Added Customers area and changed routes in Startup.cs
9:54AM  - Moved HomeController.cs to new Customer area's Controllers folder, removed the Data and Models folders, and modified HomeController.cs to define that it's in the Customer Area
9:58PM  - Moved Views > Home folder to Customer's Views folder and modified HomeController.cs namespace
10:02AM - Copied _ViewImport and _ViewStart to Customer Area and modified _ViewStart to point to correct _Layout location
10:06AM - Added Admin Area and copied _ViewImports and _ViewStart to its views folder
10:10AM - Build application. Success!
\\ END @ 10:11AM 11-03-2021 \\

// START @ 9:19AM 11-10-2021 //
9:19AM  - Committed files finished files from part 1 of assignment. It worked this time! Not sure why but I'm not going to look a gift horse in the mouth.
9:26AM  - ERROR: Application won't build. Need to pick a startup item but I don't know what to pick. I tried a few things but none of them work.
		  FIXED: I had opened the application wrong in Visual Studio. Opened it correctly and it runs!
9:48AM  - Created initial migration. File name: 20211110144758_AddDefaultIdentityMigration.cs
9:50AM  - Updated Database
9:51AM  - Ran application. No errors.
9:53AM  - Created Category class
10:04AM - Added new migration. File name: 20211110150313_AddCategoryToDb.cs
10:05AM - Modified ApplicationDbContext.cs to add Category model
10:08AM - Deleted original AddCategoryToDb migration and created a new AddCategoryToDb migration. File name: 20211110151226_AddCategoryToDb.cs
10:12AM - Updated database
10:15AM - Checked SQL Server Object Explorer. Everything is there.
10:19AM - Pushed changes to GitHub.
10:23AM - Created Repository and iRepository folders
10:33AM - Created iRepository.cs file
10:38AM - Pushed to GitHub
\\ END @ 10:38AM 11-10-2021 \\

// START @ 4:53AM 11-15-2021 //
4:53AM  - Check everything over
4:58AM  - Create and edit Repository.cs class
5:12AM  - Created and edited CategoryRepository.cs and ICategoryRepository.cs
5:22AM  - Ran. No Build Errors.
5:24AM  - Push to github.
5:26AM  - Create and edit ISP_Call.cs and SP_Call.cs
5:54AM  - Create and edit IUnitOfWork.cs and UnitOfWork.cs
6:05AM  - Modified Startup.cs
6:10AM  - Ran. No Build Errors.
6:12AM  - Push to github.
6:14AM  - Created and modified CategoryController.cs
6:19AM  - ERROR: A bunch of stuff suddenly broke.
          FIXED: Figured out that I somehow accidentally deleted IRepository.cs file.
6:32AM  - Finished modifying CategoryController.cs
6:54AM  - Add new Category View
7:02AM  - Ran. No Build Errors.
7:04AM  - Modified _Layout.cshtml to move Category link
7:07AM  - Ran. No Build Errors.
7:15AM  - Push to github.
7:16AM  - Created new migration because I switched computers and it wasn't working 20211115123319_ComputerChangeMigration.cs + updated database
7:18AM  - Added and called category.js
7:24AM  - Modified CategoryController.cs to add IActionResult Upsert
7:28AM  - Created and modified Upsert.cshtml
7:33AM  - Created and edited partial views for Edit and Back
7:46AM  - Modified Upsert.cshtml and Index.cshtml
7:53AM  - Modified CatgoryController.cs to create Upsert POST action method
8:41AM  - Whoops forgot to keep updating this. Did a whole bunch of stuff. Sorry!
8:42AM  - Added the API call for HTTPDelete and implemented it in category.js
8:55AM  - Tested. Everything works :)
8:57AM  - Uploaded to Github
\\ END @ 8:57AM 11-15-2021 \\

// START @ 11:16AM 11-15-2021 //
11:16AM - Uncommented [HttpPost] in CategoryController.cs file that was breaking my code for some reason at home. It works now just fine :)
11:21AM - Fiddled with styles
11:43AM - ERROR: Whoops I was wrong the [HttpPost] line still breaks my code for some reason :( Andrew says he'll look at it after marking.
12:12PM - Marked! :)
12:15PM - Pushed to Github
\\ END @ 12:15PM 11-15-2021 \\

// START @ 2:35AM 11-24-2021 //
2:35AM - Created and Modified CoverType.cs
2:42AM - Added migration 20211124074300_AddCoverTypeToDb.cs
2:44AM - Added CoverType to ApplicationDbContext
2:46AM - Re-ran add-migration, file created: 20211124074653_AddCoverTypeToDb.cs
2:47AM - Update Database
2:50AM - Created and modified ICoverTypeRepository.cs and CoverTypeRepository.cs
2:53AM - Ran. No Build Errors.
2:56AM - Pushed to Github
3:05AM - Updated UnitOfWork.cs & IUnitOfWork.cs
3:08AM - Ran. No Build Errors.
3:10AM - Pushed to Github
3:11AM - Created and modified the CoverTypeController.cs file
3:15AM - Created and modified the Index.cshtml, Upsert.cshtml, _CreateAndBackToListButton.cshtml, and _EditAndBackToListButton.cshtml files in the Views\CoverType folder + coverType.js in wwwroot\js folder
3:22AM - Ran. No Build Errors.
3:24AM - Pushed to Github.
3:25AM - Updated _Layout.cshtml to add link to CoverType page
3:41AM - ERROR: When I update an entry on the CoverType table it updates it on the Category table instead. The Create and Delete methods work but not update for some reason. FIXED: Accidentally forgot to change Categories to CoverTypes in Update method of CoverTypeRepository.cs
3:45AM - Create and modify Product.cs in .Models project
3:52AM - Update ApplicationDbContext.cs
3:54AM - Added migration 20211124085359_AddProductToDb.cs + update-database
3:55AM - Updated Product class
3:56AM - Added migration 20211124085647_AddValidationToProduct.cs + update-database
4:01AM - Created and modified IProductRepository.cs and ProductRepository.cs
4:08AM - Updated UnitOfWork.cs & IUnitOfWork.cs
4:12AM - Ran. No Build Errors.
4:14AM - Pushed to Github.
4:15AM - Created and modified ProductVM.cs
4:33AM - Installed dependencies & modified ProductController.cs
4:51AM - Push to Github
4:52AM - Created Product Views & product.js
5:01AM - Updated _Layout.cshtml
5:05AM - Ran. Got an error but the slides say to ignore it for now.
5:07AM - Push to Github
5:08AM - Update Upsert method
5:15AM - Oh! I only have to do up to section 2! :)
5:17AM - Push to Github
\\ END @ 5:17AM 11-24-2021 \\

// START @ 9:25AM 11-24-2021 //
9:25AM  - Update database
10:00AM - Finally fixed my error! I had an extra space in my ProductController.cs file in includeProperties
10:04AM - Push to Github
\\ END @ 10:39AM 11-24-2021 \\ 

// START @ 11:23AM 11-29-2021 //
11:23AM - Created Tinycloud account and added rich text box + input validation
11:47AM - ERROR: Crashing when I tried to open the product page.
          FIXED: Had to update-database. Works now.
11:53AM - ERROR: Upsert page couldn't be found.
          FIXED: It was still commented out from one of the previous steps. Uncommented it and it works now.
12:09AM - Updated ProductController.cs
12:25AM - Uploaded to Github
\\ END @ 12:25AM 11-29-2021 \\

// START @ 10:03PM 11-30-2021 //
10:03PM - Testing. Error with my database because I accidentally called two things CategoryId.
10:21PM - Create new migration
12:22AM - Whoops I got really invested into figuring out all the errors that were cropping up. I had a cascade of errors where trying to solve one just created a bunch more. There were a few things wrong in the product.js file that I had to fix because it was using the wrong names for table data. I also spent some time fixing my upsert method because I didn't realize I was supposed to keep both of them and had to troubleshoot why it wasn't working.
12:28AM - Tested! Everything works :)
12:32AM - Uploaded to Github.
\\ END @ 12:32AM  12-01-2021 \\

// START @ 8:14PM 12-04-2021 //
8:14PM  - Updated ProductController.cs to upload images to server.
8:48PM  - ERROR: Images aren't uploading correctly. Says it can't find file path.
         FIXED: Whoops I'm dumb. My images/products folder in wwwroot didn't exist on my system but it showed up in the solution explorer in Visual Studio just with an x next to it. I thought that meant it wasn't uploaded to Github because it was empty but apparently not. 
9:13PM  - Updated product.js to include image on in product table.
9:25PM  - Started fiddling with how the table is displayed to make it look better.
10:53PM - Whoops got distracted. Now adding more books to the database.
11:08PM - Updated project.js to format the currency.
11:23PM - Done :) Pushed to Github.
\\ END @ 11:23PM 12-04-2021 \\
