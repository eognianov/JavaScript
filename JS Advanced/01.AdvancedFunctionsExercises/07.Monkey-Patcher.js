function solution(cmd){
    let post=this;
    let obj=(()=>{    
    function upvote() {post.upvotes+=1;};
    function downvote() {post.downvotes+=1;};
    function score(){
   
        let totalPosts=post.downvotes+post.upvotes;
        let mostRatings=post.downvotes>=post.upvotes?post.downvotes:post.upvotes;
       
        let PositiveVibe=post.upvotes/totalPosts*100>66;
        let NegativeVibe=post.downvotes/totalPosts*100>50;
        let votesOverHundred=post.downvotes>=100?true:post.upvotes>=100?true:false;
        let rating;
        if(totalPosts<10){
          rating='new';
        }else if(totalPosts>10 && !PositiveVibe && !NegativeVibe && !votesOverHundred){
            rating='new';
        }
        else if(PositiveVibe){
          rating='hot';
        }else if(!NegativeVibe && votesOverHundred){
          rating='controversial';      
        }else{
            rating='unpopular';
        }
        let difference=post.upvotes-post.downvotes;
        if(totalPosts>50){
        let bonusComments=Math.ceil(mostRatings*0.25);
        let result=[post.upvotes+bonusComments,post.downvotes+bonusComments,difference];
        result.push(rating)
        return result;
      }
      let resultNotTampered=[post.upvotes,post.downvotes,difference];
      resultNotTampered.push(rating)
      return resultNotTampered;
    };
   
    return  {upvote,downvote,score}
})();
return obj[cmd]();
};