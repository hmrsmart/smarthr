// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    if (req.method === 'POST') {
    res.status(200).json({ name: 'Hussein' })
  } else {
    res.status(200).json({ name: 'John Does' })
  }
  
}
