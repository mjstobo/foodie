foodie


todo:
- Search by categories
- Search by cuisines
- Filtering by cuisine
- add css transitions to tiles being re-rendered on search / filter


Questions / thoughts:
- Search works, but need to tidy up the No Results logic. Very clumsy at the moment.
- Better to store TileItem elements _inside_ state, or generate them from a list on render?


 Filter logic:

- Data is retrieved and passed to State from JSON
- This is the standard list of data. 
