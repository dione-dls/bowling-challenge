describe('Game', function() {
  it('can create a game', function() {
    var game = new Game();
  });

  it('can roll gutter game', function() {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
});
