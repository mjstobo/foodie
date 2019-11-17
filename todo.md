foodie


todo:
- Filtering by cuisine
- mobile styles for map view
- push JSON to node app
- add login
    - Saved restuarants?
- Synchronise 'selected' state between map and listing view

Questions / thoughts:
- Search works, but need to tidy up the No Results logic. Very clumsy at the moment.
- Better to store TileItem elements _inside_ state, or generate them from a list on render?


 Filter logic:

- Data is retrieved and passed to State from JSON
- This is the standard list of data. 
