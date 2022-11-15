function rankingSort(players) {
  const newArr = [...players].sort(function (p1, p2) {
    if (p1.points > p2.points) return -1;
    if (p1.points < p2.points) return 1;
    if (p1.bucholz > p2.bucholz) return -1;
    if (p1.bucholz < p2.bucholz) return 1;
    if (p1.initRank > p2.initRank) return -1;
    if (p1.initRank < p2.initRank) return 1;
  });
  console.log('rankingFun: ' + JSON.stringify(newArr));
  return newArr;
}

export { rankingSort };
