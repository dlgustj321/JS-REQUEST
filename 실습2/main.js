import { getAvatars, getAvatar, createAvatars, patchAvatar, deletAvatar } from "./api.js";

let avatar = await createAvatars({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'collarBasic', 
  accessories: 'headset'
});
avatar = await patchAvatar(avatar.id,{
  hairType: 'short3',
  hairColor: 'blonde',
});

console.log(avatar);
await deletAvatar(avatar.id);