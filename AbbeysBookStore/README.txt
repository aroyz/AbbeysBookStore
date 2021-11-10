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