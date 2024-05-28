const explorer = {
  name: "root",
  isFolder: "true",
  items: [
    {
      name: "folder1",
      isFolder: "true",
      items: [
        {
          name: "file1",
          isFolder: "false",
        },
        {
          name: "file2",
          isFolder: "false",
        },
        {
          name: "folder3",
          isFolder: "true",
          items: [
            {
              name: "file3",
              isFolder: "false",
            },
            {
              name: "file4",
              isFolder: "false",
            },
          ],
        },
      ],
    },
    {
      name: "folder2",
      isFolder: "true",
      items: [
        {
          name: "folder4",
          isFolder: "true",
          items: [
            {
              name: "file3",
              isFolder: "true",
            },
            {
              name: "folder5",
              isFolder: "true",
              items: [
                {
                  name: "file3",
                  isFolder: "true",
                },
                {
                  name: "file4",
                  isFolder: "false",
                },
              ],
            },
          ],
        },
        {
          name: "file4",
          isFolder: "false",
        },
      ],
    },
  ],
};

export default explorer;
