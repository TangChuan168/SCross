@ system design 
there are mianly 3 components in this app.(menu component,member research component and search results component),they all share a global state called resultContext.research component can update returned user data to resultContext, search results can access these data and render to page.

@limitation 
the search results stored in resultContext are not permanent, its life cycle ends when you close the page or refresh the page.

1.Getting Started to use this app

first you need download NPM by input npm install
after installed npm then you can start to run this project

2.type npm start to start project

3.the first page is Mune page which tell you what functions it has after you click mune button

4.after click button you will see  member search button and search results button, member search button will direct you to User info page which allow you to search user by providing information about that user for exmaple policy number or member card number etc.

5.Search Results button will lead you to records page which allow you to review the history records of the research you have done through the member search page.



