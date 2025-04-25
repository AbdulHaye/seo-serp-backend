const helloWorld = async (req, res) => {
    try {
        res.json({ message: "Hello World!" });
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};
module.exports = { helloWorld };









