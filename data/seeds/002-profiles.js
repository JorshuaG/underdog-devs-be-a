const profiles = [...new Array(12)].map((i, idx) => ({
  profile_id: (idx + 1).toString(),
  email: `llama00${idx + 1}@maildrop.cc`,
  first_name: idx < 2 ? `Admin` : idx == 2 ? `Moderator` : `User`,
  last_name: idx < 2 ? `${idx + 1}` : `${idx + 1}`,
  role_id: idx < 2 ? 1 : idx == 2 ? 2 : 3,
  pending: idx < 6 ? false : true,
}));

profiles[0].profile_id = '00ulthapbErVUwVJy4x6';
profiles[1].profile_id = '00ultwew80Onb2vOT4x6';
profiles[2].profile_id = '00ultx74kMUmEW8054x6';
profiles[3].profile_id = '00ultwqjtqt4VCcS24x6';
profiles[4].profile_id = '00ultwz1n9ORpNFc04x6';
profiles[5].profile_id = '00ulzfj6nX79gu0Nh5d6';
profiles[6].role_id = 3;
profiles[7].role_id = 4;
profiles[7].profile_id = '00u13oned0U8XP8Mb4x7';
profiles[8].role_id = 3;
profiles[9].role_id = 4;
profiles[10].role_id = 4;
profiles[11].role_id = 5;

exports.seed = function (knex) {
  return knex('profiles')
    .del()
    .then(function () {
      return knex('profiles').insert(profiles);
    });
};
