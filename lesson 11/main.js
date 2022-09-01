const wake_Up = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Проснуться');
        }, 3000);
    });
};
const take_a_shower = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Принять душ');
        }, 2000);
    });
};
const eat_breakfast = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Позавтракать');
        }, 2000);
    });
};
const walk_the_dog = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Выгулять собаку');
        }, 5000);
    });
};
const go_to_work = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Приехать на работу');
        }, 1500);
    });
};
const eat_dinner = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Пообедать');
        }, 2000);
    });
};
const meet_friends = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Встретиться с друзьями');
        }, 3000);
    });
};
const go_home = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Приехать домой');
        }, 1500);
    });
};
const learn = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Обучение в OKTEN');
        }, 5000);
    });
};
const have_a_rest = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Отдых');
        }, 2000);
    });
};
const container = async function () {
    const wake = await wake_Up();
    const shower = await take_a_shower();
    const breakfast = await eat_breakfast();
    const walk = await walk_the_dog();
    const work = await go_to_work();
    const dinner = await eat_dinner();
    const friends = await meet_friends();
    const home = await go_home();
    const learning = await learn();
    const rest = await have_a_rest();
    const [wakeUp, takeShower, eatBreakfast, walkDog, goWork, earDinner, meetFriends, goHome, study, haveRest] = await Promise.all([wake, shower, breakfast, walk, work, dinner, friends, home, learning, rest]);
    console.log(wakeUp);
    console.log(takeShower);
    console.log(eatBreakfast);
    console.log(walkDog);
    console.log(goWork);
    console.log(earDinner);
    console.log(meetFriends);
    console.log(goHome);
    console.log(study);
    console.log(haveRest);
};
container();