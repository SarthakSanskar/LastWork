exports.create = async (req, res) => {
    try {
      console.log("$$$$$$$$$$$$$$$ Profile CREATE completed $$$$$$$$$$$$$$");
    } catch (err){
      res.status(400).send('@@@@@Create profile failed@@@@@@');
    }
}

exports.viewProfile = (req, res) => {
  try {
    console.log("$$$$$$$$$$$$$$$ Profile Retrived $$$$$$$$$$$$$$");
  } catch (err){
    res.status(400).send('@@@@@Profile retrive failed@@@@@@');
  }
}