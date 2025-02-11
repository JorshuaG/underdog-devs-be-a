const dummyData = [
  {
    profile_id: '00u13oned0U8XP8Mb4x7',
    email: 'fakeemail2@gmail.com',
    location: 'Bumville, USA',
    name: 'Hotdog Jeopardy',
    current_comp: 'Amazin',
    tech_stack: 'Node.js, Axios',
    can_commit: false,
    how_commit: '1:1 sessions - Once a month',
  },
];

exports.seed = function (knex) {
  return knex('mentor_intake')
    .del()
    .then(function () {
      return knex('mentor_intake').insert(dummyData);
    });
};
