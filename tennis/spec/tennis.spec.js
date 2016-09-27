var letter = "Hi I am Tennis Game";
var letter2 = "Hi I am Somnuek and Aiyaruck";

describe("Tennis Game", function() {
  it("TEST RUS PASS1", function() {
    expect(letter).toEqual("Hi I am Tennis Game");
  });
  it("TEST RUN PASS2",function(){
    expect(letter2).toEqual("Hi I am Somnuek and Aiyaruck")
  });
});
