/* TODOS:
 *    - match the userID with its name
 *
 * input message format:
 * incomingMessage = {
 *      type: message,
 *      participant: {
 *          from: userA,  ==> this should be the user id
 *          to: userB     ==> this should be the user id
 *      },
 *      shell: "...",
 *      ghost: "...",
 *      duration: "...",
 *      timeStamp: new Date()
 *  }
 *
 * this message will be stored into a message object according to its source
 *
 * var messages = {}
 * message[incomingMessage.participant.from].push({
 *  state: 'receive',
 *  shell: incomingMessage.shell,
 *  ghost: incomingMessage.ghost
 * })
 */

// this message should be concluded from receiving/sending messages
export var Messages = {
  '1034': [
    {
      state: 'receive',
      shell: 'let\'s chat!',
      ghost: undefined,
      timeStamp: Date.now()
    },
    {
      state: 'send',
      shell: 'fine, it works!',
      ghost: undefined,
      timeStamp: Date.now() + 1
    },
    {
      state: 'receive',
      shell: 'Eiusmod reprehenderit do elit sint proident fugiat. Adipisicing quis adipisicing eu tempor nisi labore qui. Elit incididunt deserunt sunt consectetur. Amet anim sint culpa sint officia non aliqua culpa deserunt. Adipisicing laborum officia Lorem irure tempor et. Eiusmod proident veniam magna nulla magna.',
      ghost: undefined,
      timeStamp: Date.now() + 2
    },
    {
      state: 'send',
      shell: 'Enim duis veniam irure cillum exercitation veniam ad ex culpa ex consectetur. Ut fugiat duis duis culpa minim occaecat in id nulla esse mollit dolor deserunt est. Consectetur adipisicing amet qui ad. Anim tempor non sint reprehenderit esse eiusmod est mollit quis tempor.',
      ghost: undefined,
      timeStamp: Date.now() + 3
    }
  ],
  '324': [
    {
      state: 'receive',
      shell: 'hello, are you here?',
      ghost: 'I hope you can lend me some money',
      timeStamp: Date.now() + 4
    }
  ]
}

// the following message should get from friendList request
export var UserCheatSheet = {
  '1034': 'james',
  '324': 'kitty'
}
