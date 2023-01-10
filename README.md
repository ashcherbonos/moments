# moments

This is code challenge solution.

Used tech stack: Vue3, Express.js, Mongo DB + Mongoose ODM.
Challenge was that I never work with any of this tech. It takes about 2 working days to complete, including learning time.

Database was deployed to Atlas, backend to Azure, front to github pages.
You can look results at:
https://ashcherbonos.github.io/moments/

Every gallery presents as carousel, you can swipe horizontally through images.

Front-side fetches galleries by portions, and queries for new portion when user scroll to the bottom of galleries list.
There are only 4 galleries in db, so I fake the "infinite" gallery experience by fetching skipping "skip" parameter in query. So you can scroll site really long down...

You can like galleries, but for now you can not "unlike" it back (its one-way road..).
