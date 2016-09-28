function Tennis() {
  var a = 0;
  var b = 0;
  this.start=function(){
    a=0;
    b=0;
  };
  this.echo = function()
 {
  if( a === 0 && b===0 )
  return 'Love - Love';
 }

 this.keepscoreA=function(){
   if(a===0){a=15;}
   else if(a===15){a=30;}
   else if(a===30){a=40;}
   else{
         a=50;
       }
   }
 this.keepscoreB=function(){
      if(b===0){b=15;}
      else if(b===15){b=30;}
      else if(b===30){b=40;}
      else{
            a=50;
          }
 }
 this.scoreA=function(){
   if(a===15&&b===0){
     return 'Fifteen - Love';}
   else if(a===30&&b===0)
   {
      return 'Thirty - Love';
   }
   else if(a==40&&b===0)
   {
     return 'Forty - Love';
   }

   else if(a===30&&b===15)
   {
      return 'Thirty - Fifteen';
   }
   else if(a===50)
   {
     return'PlayerA Won';
   }
 }
 this.scoreB=function(){
   if(b===15&&a===0){
     return 'Love - Fifteen';}
   else if(b===30&&a===0)
   {
      return 'Love - Thirty';
   }
   else if(b==40&&a===0)
   {
     return 'Love - Forty';
   }
   else if(a===50)
   {
     return'PlayerB Won';
   }
 }
 this.draw=function(){
  if(a===b)
  {
    return 'Fifteen - Fifteen';
  }
}


 }







  describe("Tennis", function() {
  var tennis = new Tennis();
    it('should echo "Love - Love" when start game', function() {
        tennis.start();
        expect(tennis.echo()).toEqual('Love - Love');
      })
        it('should echo "Fifteen - Love" when  score 15-0', function() {
            tennis.keepscoreA();
            expect(tennis.scoreA()).toEqual('Fifteen - Love');
        })
        it('should echo "Fifteen - Love" when  score 30-0', function() {
            tennis.keepscoreA();
            expect(tennis.scoreA()).toEqual('Thirty - Love');
        })
        /*it('should echo "Forty - Love" when score 40-0', function() {
            tennis.keepscoreA();
            expect(tennis.scoreA()).toEqual('Forty - Love');
        })
        it('should echo "PlayerA Won" when score end', function() {
            tennis.keepscoreA();
            expect(tennis.scoreA()).toEqual('PlayerA Won');
        })

        it('should echo "Love - Fifteen" when score 0-15', function() {
            tennis.start();
            tennis.keepscoreB();
            expect(tennis.scoreB()).toEqual('Love - Fifteen');
        })
        it('should echo "Love - Thirty" when score 0-30', function() {
            tennis.keepscoreB();
            expect(tennis.scoreB()).toEqual('Love - Thirty');
        })
        it('should echo "Love - Forty" when score 0-40', function() {
            tennis.keepscoreB();
            expect(tennis.scoreB()).toEqual('Love - Forty');
        })
        it('should echo "PlayerB Won" when score end', function() {
            tennis.keepscoreB();
            expect(tennis.scoreB()).toEqual('PlayerB Won');
        })
        it('should echo "Fifteen - Fifteen" when  score 15-15', function() {
            tennis.start();
            tennis.keepscoreA();
            tennis.keepscoreB();
            expect(tennis.draw()).toEqual('Fifteen - Fifteen');
        })
        it('should echo "Thirty - Fifteen" when score end', function() {
            tennis.keepscoreA();
            expect(tennis.scoreA()).toEqual('Thirty - Fifteen');
        })*/


    });
