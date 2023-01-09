# moments

I chose to build full stack solution.

It used your tech stack: Vue3, Express.js, Mongo DB + Mongoose ODM.
Challenge was that I never work with any of this tech. It takes about 2 working days to complete, including learning time. Well, the real challenge was outdated documentation for almost every tool... or even lack of documentation at all...

I saved my git history, so you can look at style I used to work with git
(Well, during real work, I don't create a PR every 2 hours. This was more for demonstration purpose...)

![Alt text](readme/git.png?raw=true "git flow")

Database was deployed to Atlas, backend to Azure, front to github pages.
You can look results at:
https://ashcherbonos.github.io/moments/

Every gallery presents as carousel, you can swipe horizontally through images.

Front-side fetches galleries by portions, and queries for new portion when user scroll to the bottom of galleries list.
There are only 4 galleries in db, so I fake the "infinite" gallery experience by fetching skipping "skip" parameter in query. So you can scroll site really long down...

You can like galleries, but for now you can not "unlike" it back (its one-way road..).
