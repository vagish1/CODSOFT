import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData ;
        if(token && isCustomAuth){
            decodedData =jwt.verify(token, process.env.SECRET);

            req.userId = decodedData?.id;
        }else{
            decodedData =jwt.decode(token, process.env.SECRET);

            req.userId = decodedData?.id;
        }
        next();
    } catch (error) {
        res.status(403).json({message: error})
    }
}

export default auth;