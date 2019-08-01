const db = require('./db');
const { Movie, Person, Tree } = db.models;


(async () => {

    await db.sequelize.sync({ force: true });

    try {
        const movieInstances = await Promise.all( [ 
            Movie.create({
                title: 'Toy Story',
                runtime: 81,
                releaseDate: '1995-11-22',
                isAvailableOnVHS: true,
            }),

            Person.create({
                name: "Brian Beeler",
                age: 27,
                retirementDate: '2050-04-13'
            }),

            Tree.create({
                name: "Oak",
                height: 65
            }),
      
            Movie.create({
                title: 'The Horse the Could',
                runtime: 115,
                releaseDate: '2004-04-14',
                isAvailableOnVHS: true,
          }),
            Movie.build({
                title: 'Toy Story 3',
                runtime: 103,
                releaseDate: '2010-06-18',
                isAvailableOnVHS: false
            })
            ]
          );

          const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } } );
          console.log(movieByRuntime.toJSON());
          
    } catch (error) {
        if (error.name === 'SequelizeValidationError') { 
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        }   else {
            throw error;
        }
    }

})();