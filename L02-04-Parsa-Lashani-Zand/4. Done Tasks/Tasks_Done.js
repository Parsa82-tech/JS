const fetchTasks = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tasks = await response.json();
      const completedTasks = tasks.filter(task => task.completed === true);
      return completedTasks;
    } catch (error) {
      return console.error('Failed to fetch user data:', error);
    }
  };
  
  const customPrint = async (tasks) => {
    const customtasks = await tasks;
    customtasks.forEach(task => {
      console.log(`✅ ${task.title}`);
    });
  };
  
  customPrint(fetchTasks('https://jsonplaceholder.typicode.com/todos'));