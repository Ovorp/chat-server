const messages = [];
let id = 0;

// a message will be {id, text, time }

create = (req, res) => {
  const { text, time } = req.body;
  messages.push({ text, time, id });
  id++;
  res.status(200).json(messages);
};

read = (req, res) => {
  res.status(200).json(messages);
};

update = (req, res) => {
  const { text, time } = req.body;
  const { id } = req.params;
  messages.forEach((val, i) => {
    if (val.id === +id) {
      messages[i] = {
        // this will set the value of the key to the new value or if that value is missing it will set it to the original value.
        text: text || messages[i].text,
        time: time || messages[i].time,
        id: +id,
      };
    }
  });
  res.status(200).json(messages);
};

toDelete = (req, res) => {
  const { id } = req.params;
  messages.forEach((val, i) => {
    if (val.id === +id) {
      messages.splice(i, 1);
    }
  });
  res.status(200).json(messages);
};

module.exports = { create, read, update, toDelete };
