/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let res = [];
    if(intervals.length < 2){
        return intervals;
    }
    intervals.sort(function(a, b){
        return a.start - b.start;
    })
    let [min, max] = [intervals[0].start, intervals[0].end];
    for(let i = 0; i < intervals.length - 1; i++){
        if(max >= intervals[i+1].start){
            min = Math.min(intervals[i+1].start, min);
            max = Math.max(intervals[i+1].end, max);
        }else{
            res.push(new Interval(min, max));
            [min, max] = [intervals[i+1].start, intervals[i+1].end];
        }
    }
    res.push(new Interval(min, max));
    return res;
};