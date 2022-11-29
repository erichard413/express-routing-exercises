const express = require('express');
const ExpressError = require('./expressError')
const app = express();
const maths = require('./maths')
const { getMean, getMedian, getMode } = maths

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', function(req, res, next) {
  try {
      if (!req.query.nums) throw new ExpressError("nums are required!", 400)
      let nums = req.query.nums.split(',')
      for (let i = 0; i<nums.length;i++) {
        console.log(parseInt(nums[i]))
        if (parseInt(nums[i])) {
        } else {
          throw new ExpressError(`${nums[i]} is not a number!`, 400)
        }
      }
      let mean = getMean(nums)
      return res.status(200).json({"response": {
      "operation": "mean",
      "value": mean
      }});
  } catch (e) {
      next(e)
    }
});

app.get('/median', function(req, res, next) {
  try {
    let nums = req.query.nums.split(',')
    if (!req.query.nums) throw new ExpressError("nums are required!", 400)
    for (let i = 0; i<nums.length;i++) {
      console.log(parseInt(nums[i]))
      if (parseInt(nums[i])) {
      } else {
        throw new ExpressError(`${nums[i]} is not a number!`, 400)
      }
    }
    let median = getMedian(nums)
    return res.status(200).json({"response": {
    "operation": "median",
    "value": median
    }});
  } catch(e) {
    next(e)
  }
});

app.get('/mode', function(req,res, next) {
  try {
    if (!req.query.nums) throw new ExpressError("nums are required!", 400)
    let nums = req.query.nums.split(',')
    for (let i = 0; i<nums.length;i++) {
      console.log(parseInt(nums[i]))
      if (parseInt(nums[i])) {
      } else {
        throw new ExpressError(`${nums[i]} is not a number!`, 400)
      }
    }
    let mode = getMode(nums)
    return res.status(200).json({"response": {
    "operation": "mode",
    "value": mode
  }})
  } catch(e) {
    next(e)
  }
})

app.use((error, req, res, next) => {
  // the default status is 500 Internal Server Error
  let status = error.status || 500;
  let message = error.msg

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status}
  })
})

app.listen(3000, function() {
    console.log('Server started on port 3000.');
});
