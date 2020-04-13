const fmapOfFilter = fn => map => {
  const res = []

  for(let [key, value] of map) {
    const res = fn(value, key)
    if(res) {
      res.push(res)
    }
  }

  return res
}

exports.fmapOfFilter = fmapOfFilter
