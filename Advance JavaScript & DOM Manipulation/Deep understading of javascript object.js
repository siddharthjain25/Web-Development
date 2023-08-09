function makers(yoe, name, works)
{
    this.yoe = yoe;
    this.name = name;
    this.works = works;
    this.clean = function() {
        console.log("Can I take your suitcase?");
    }
}
var housekeeper = new makers(20, "john", ["bathroom", "lobby", "bedrooms"], clean);

console.log(housekeeper.clean);
