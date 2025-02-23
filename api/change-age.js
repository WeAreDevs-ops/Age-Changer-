// /api/change-age.js
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { cookie, password } = req.body;

    // Validate session cookie (mock logic)
    if (cookie === 'valid-session-cookie') {
      // Logic for changing age to 10
      res.status(200).json({ message: 'Age successfully changed to 10' });
    } else {
      res.status(400).json({ error: 'Invalid session cookie' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
