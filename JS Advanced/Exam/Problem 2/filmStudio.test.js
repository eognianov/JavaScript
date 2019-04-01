const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;

describe('Film Studio', () => {

    let filmStudio;

    describe('initiliaze', () => {
        it('with one parametar', () => {
            filmStudio = new FilmStudio('SoftUni');

            assert.equal(filmStudio.name, 'SoftUni');
            assert.isArray(filmStudio.films);
            assert.isEmpty(filmStudio.films);
        });
    });

    describe('casting', () => {
        it('no films yet', () => {
            let filmStudioName = 'SoftUni';
            filmStudio = new FilmStudio(filmStudioName);
            let result = filmStudio.casting('actor', 'role')
            assert.equal(result, `There are no films yet in ${filmStudioName}.`);
        });

        it('no such a role', () => {
            filmStudio = new FilmStudio('SoftUni');
            filmStudio.makeMovie('Test', ['role1', 'role2']);
            let result = filmStudio.casting('actor', 'role');
            assert.equal(result, 'actor, we cannot find a role role...');
        });

        it('take the role', () => {
            filmStudio = new FilmStudio('SoftUni');
            filmStudio.makeMovie('Test', ['role1', 'role2']);
            let result = filmStudio.casting('actor', 'role1');
            assert.equal(result, `You got the job! Mr. actor you are next role1 in the Test. Congratz!`)
        });
    });

    describe('makeMovie', () => {
        it('Invalid arguments count', () => {
            assert.throw(()=>filmStudio.makeMovie('test'),'Invalid arguments count');
        });
        it('Invalid argumenst', () => {
            assert.throw(()=>filmStudio.makeMovie(1,2),'Invalid arguments');
        });
        it('succssesfully made movie', () => {
            filmStudio = new FilmStudio('SoftUni');
            let result = filmStudio.makeMovie('Movie', ['role1', 'role2']);
            let expected = { filmName: 'Movie',
            filmRoles:
             [ { role: 'role1', actor: false },
               { role: 'role2', actor: false } ] };
            assert.equal(result, expected);
            
        });
    });

    describe('lookForProducer', () => {
        it('movie doesnt exists', () => {
            filmStudio = new FilmStudio('SoftUni');
            let film = 'film';
            assert.throws(()=>filmStudio.lookForProducer(film), `${film} do not exist yet, but we need the money...`);
        });
    });
    
});