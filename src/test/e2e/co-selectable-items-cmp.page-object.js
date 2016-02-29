"use strict";
var VISIBLE_CLASS = 'co-visible';
var CoSelectableItemsPageObject = (function () {
    function CoSelectableItemsPageObject() {
        this.selectableFilter = element(by.id('co-selectable-items-selectable-filter'));
        this.selectedFilter = element(by.id('co-selectable-items-selected-filter'));
        this.selectAllButton = element(by.id('co-selectable-items-select-all'));
        this.deselectAllButton = element(by.id('co-selectable-items-deselect-all'));
        this.selectableList = element(by.id('co-selectable-items-selectable-list'));
        this.selectedList = element(by.id('co-selectable-items-selected-list'));
    }
    CoSelectableItemsPageObject.prototype.getSelectableItems = function () {
        return this.selectableList.all(by.css('li.' + VISIBLE_CLASS));
    };
    CoSelectableItemsPageObject.prototype.getSelectedItems = function () {
        return this.selectedList.all(by.css('li.' + VISIBLE_CLASS));
    };
    // http://stackoverflow.com/questions/27910331/using-protractor-with-loops
    // return items that matches the filter
    CoSelectableItemsPageObject.prototype.getItemsByText = function (items, name) {
        return items.filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === name;
            });
        });
    };
    CoSelectableItemsPageObject.prototype.selectAllItems = function (filterString) {
        if (filterString === void 0) { filterString = ''; }
        this.selectableFilter.clear();
        this.selectableFilter.sendKeys(filterString);
        this.selectAllButton.click();
        this.selectableFilter.clear();
    };
    CoSelectableItemsPageObject.prototype.deselectAllItems = function (filterString) {
        if (filterString === void 0) { filterString = ''; }
        this.selectedFilter.clear();
        this.selectedFilter.sendKeys(filterString);
        this.deselectAllButton.click();
        this.selectedFilter.clear();
    };
    return CoSelectableItemsPageObject;
}());
exports.CoSelectableItemsPageObject = CoSelectableItemsPageObject;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZTJlL2NvLXNlbGVjdGFibGUtaXRlbXMtY21wLnBhZ2Utb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFNLGFBQWEsR0FBRyxZQUFZLENBQUE7QUFFbEM7SUFBQTtRQUVTLHFCQUFnQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUMzRSxtQkFBYyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxzQkFBaUIsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDdkUsbUJBQWMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsaUJBQVksR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFpQzVFLENBQUM7SUEvQkMsd0RBQWtCLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVELHNEQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsdUNBQXVDO0lBQ3ZDLG9EQUFjLEdBQWQsVUFBZSxLQUFLLEVBQUUsSUFBWTtRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUM5QixNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQTtZQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG9EQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUF6Qiw0QkFBeUIsR0FBekIsaUJBQXlCO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxzREFBZ0IsR0FBaEIsVUFBaUIsWUFBeUI7UUFBekIsNEJBQXlCLEdBQXpCLGlCQUF5QjtRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFDSCxrQ0FBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksbUNBQTJCLDhCQXdDdkMsQ0FBQSIsImZpbGUiOiJ0ZXN0L2UyZS9jby1zZWxlY3RhYmxlLWl0ZW1zLWNtcC5wYWdlLW9iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdsb2JhbHMgZnJvbSBwcm90cmFjdG9yXG5kZWNsYXJlIHZhciBlbGVtZW50OmFueVxuZGVjbGFyZSB2YXIgYnk6YW55XG5cbmNvbnN0IFZJU0lCTEVfQ0xBU1MgPSAnY28tdmlzaWJsZSdcblxuZXhwb3J0IGNsYXNzIENvU2VsZWN0YWJsZUl0ZW1zUGFnZU9iamVjdCB7XG5cbiAgcHVibGljIHNlbGVjdGFibGVGaWx0ZXIgPSBlbGVtZW50KGJ5LmlkKCdjby1zZWxlY3RhYmxlLWl0ZW1zLXNlbGVjdGFibGUtZmlsdGVyJykpO1xuICBwdWJsaWMgc2VsZWN0ZWRGaWx0ZXIgPSBlbGVtZW50KGJ5LmlkKCdjby1zZWxlY3RhYmxlLWl0ZW1zLXNlbGVjdGVkLWZpbHRlcicpKTtcbiAgcHVibGljIHNlbGVjdEFsbEJ1dHRvbiA9IGVsZW1lbnQoYnkuaWQoJ2NvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0LWFsbCcpKTtcbiAgcHVibGljIGRlc2VsZWN0QWxsQnV0dG9uID0gZWxlbWVudChieS5pZCgnY28tc2VsZWN0YWJsZS1pdGVtcy1kZXNlbGVjdC1hbGwnKSk7XG4gIHB1YmxpYyBzZWxlY3RhYmxlTGlzdCA9IGVsZW1lbnQoYnkuaWQoJ2NvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0YWJsZS1saXN0JykpO1xuICBwdWJsaWMgc2VsZWN0ZWRMaXN0ID0gZWxlbWVudChieS5pZCgnY28tc2VsZWN0YWJsZS1pdGVtcy1zZWxlY3RlZC1saXN0JykpO1xuXG4gIGdldFNlbGVjdGFibGVJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlTGlzdC5hbGwoYnkuY3NzKCdsaS4nICsgVklTSUJMRV9DTEFTUykpXG4gIH1cblxuICBnZXRTZWxlY3RlZEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTGlzdC5hbGwoYnkuY3NzKCdsaS4nICsgVklTSUJMRV9DTEFTUykpXG4gIH1cblxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3OTEwMzMxL3VzaW5nLXByb3RyYWN0b3Itd2l0aC1sb29wc1xuICAvLyByZXR1cm4gaXRlbXMgdGhhdCBtYXRjaGVzIHRoZSBmaWx0ZXJcbiAgZ2V0SXRlbXNCeVRleHQoaXRlbXMsIG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGVsZW0pID0+IHtcbiAgICAgIHJldHVybiBlbGVtLmdldFRleHQoKS50aGVuKCh0ZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiB0ZXh0ID09PSBuYW1lXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzZWxlY3RBbGxJdGVtcyhmaWx0ZXJTdHJpbmc6IHN0cmluZyA9ICcnKSB7XG4gICAgdGhpcy5zZWxlY3RhYmxlRmlsdGVyLmNsZWFyKClcbiAgICB0aGlzLnNlbGVjdGFibGVGaWx0ZXIuc2VuZEtleXMoZmlsdGVyU3RyaW5nKVxuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmNsaWNrKClcbiAgICB0aGlzLnNlbGVjdGFibGVGaWx0ZXIuY2xlYXIoKVxuICB9XG5cbiAgZGVzZWxlY3RBbGxJdGVtcyhmaWx0ZXJTdHJpbmc6IHN0cmluZyA9ICcnKSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbHRlci5jbGVhcigpXG4gICAgdGhpcy5zZWxlY3RlZEZpbHRlci5zZW5kS2V5cyhmaWx0ZXJTdHJpbmcpXG4gICAgdGhpcy5kZXNlbGVjdEFsbEJ1dHRvbi5jbGljaygpXG4gICAgdGhpcy5zZWxlY3RlZEZpbHRlci5jbGVhcigpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL25vZGVfbW9kdWxlcyJ9
