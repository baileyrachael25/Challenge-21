const { Book, User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async () => {

        },
        me: async (parent, args, context) => {
            if (context.user) {
                return.User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    
    Mutation: {
        createBook: async (parent, args, context) => {
            const book = await Book.create(args);
            return book;
        },
    },
};

module.exports = resolvers;