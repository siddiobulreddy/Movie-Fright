document.addEventListener('DOMContentLoaded', () => {
  // ---------- Movie dataset (with poster URLs & trailer links) ----------
  const MOVIES = [
    { name: "Vikram", genre: "Action Thriller", release: "2022-06-03", rating: "8.3", director: "Lokesh Kanagaraj", hero: "Kamal Haasan", heroine: "Gayathrie", music: "Anirudh Ravichander", synopsis: "A black-ops team hunts a drug syndicate while a shadowy operative orchestrates a larger war.", trailer: "https://www.youtube.com/watch?v=OKBMCL-frPU", poster: "https://m.media-amazon.com/images/M/MV5BNTZmZjNmODQtN2ZjYS00MzI3LWI3M2ItZmI0M2Q0YWQzZjM0XkEyXkFqcGc@._V1_.jpg" },
    { name: "Karthikeya 2", genre: "Mystery Thriller", release: "2022-08-13", rating: "7.2", director: "Chandoo Mondeti", hero: "Nikhil Siddhartha", heroine: "Anupama Parameswaran", music: "Kaala Bhairava", synopsis: "A young researcher follows clues to an ancient secret and a race across continents.", trailer: "https://www.youtube.com/watch?v=E6RKsH3LI2g", poster: "https://m.media-amazon.com/images/M/MV5BYzJhZjUxZjEtZGVlOC00NjI3LWExNDAtZTk5ZGEzZTVmNTcyXkEyXkFqcGc@._V1_.jpg" },
    { name: "Ratsasan", genre: "Psychological Thriller", release: "2018-10-05", rating: "8.3", director: "Ram Kumar", hero: "Vishnu Vishal", heroine: "Amala Paul", music: "Ghibran", synopsis: "An aspiring filmmaker-turned-cop hunts a serial killer targeting schoolgirls.", trailer: "https://www.youtube.com/watch?v=GsrVJmu5f2A", poster: "https://m.media-amazon.com/images/M/MV5BNjdlZjFjNDItOTBjOC00MDJlLWI1NjktN2JiYmQwNTEwM2M4XkEyXkFqcGc@._V1_.jpg" },
    { name: "Drishyam", genre: "Crime Thriller", release: "2013-12-19", rating: "8.3", director: "Jeethu Joseph", hero: "Mohanlal", heroine: "Meena", music: "Anil Johnson", synopsis: "A father does everything to protect his family after an accidental crime.", trailer: "https://www.youtube.com/watch?v=AuuX2j14NBg", poster: "https://m.media-amazon.com/images/M/MV5BMTI1NzQzMzgxOV5BMl5BanBnXkFtZTcwMTkxNjY2OQ@@._V1_.jpg" },
    { name: "Kaithi", genre: "Action Thriller", release: "2019-10-25", rating: "8.4", director: "Lokesh Kanagaraj", hero: "Karthi", heroine: "—", music: "Sam C. S.", synopsis: "An ex-convict helps cops against a drug mafia during one intense night.", trailer: "https://www.youtube.com/watch?v=g79CvhHaj5I", poster: "https://m.media-amazon.com/images/M/MV5BMjM0ODQwNjg0MV5BMl5BanBnXkFtZTgwMTAzNjQzNjM@._V1_.jpg" },
    { name: "Goodachari", genre: "Spy Thriller", release: "2018-08-03", rating: "7.7", director: "Sashi Kiran Tikka", hero: "Adivi Sesh", heroine: "Sobhita Dhulipala", music: "Sricharan Pakala", synopsis: "A rookie intelligence officer gets entangled in a conspiracy after being framed.", trailer: "https://www.youtube.com/watch?v=RkE0yq1qk5Y", poster: "https://m.media-amazon.com/images/M/MV5BMTQwNTM1MzYwNF5BMl5BanBnXkFtZTgwMDQ2NDAzNTM@._V1_.jpg" },
    { name: "Evaru", genre: "Crime Thriller", release: "2019-08-15", rating: "8.1", director: "Venkat Ramji", hero: "Adivi Sesh", heroine: "Regina Cassandra", music: "Sricharan Pakala", synopsis: "A murder investigation with twists at every turn.", trailer: "https://www.youtube.com/watch?v=7i6kMPq7k2s", poster: "https://m.media-amazon.com/images/M/MV5BYjk2YjM5Y2ItMTEzOC00N2FkLWE1NTEtMjg1Zjc1YzFlOGE5XkEyXkFqcGc@._V1_.jpg" },
    { name: "Tumbbad", genre: "Fantasy Thriller", release: "2018-10-12", rating: "8.2", director: "Rahi Anil Barve", hero: "Sohum Shah", heroine: "Anita Date", music: "Ajay-Atul", synopsis: "A man’s greed leads him to a cursed village and an ancient treasure guarded by a deity.", trailer: "https://www.youtube.com/watch?v=sN75MPxgvX8", poster: "https://m.media-amazon.com/images/M/MV5BMTkxNTY1NDM1MF5BMl5BanBnXkFtZTgwMjA4NjU5NzM@._V1_.jpg" },
    { name: "13B", genre: "Supernatural Thriller", release: "2009-03-06", rating: "7.3", director: "Vikram K. Kumar", hero: "R. Madhavan", heroine: "Neetu Chandra", music: "Shankar–Ehsaan–Loy", synopsis: "A TV soap eerily mirrors a family’s life, foreshadowing tragic events.", trailer: "https://www.youtube.com/watch?v=FQmB6y0uG1k", poster: "https://m.media-amazon.com/images/M/MV5BNzI4Y2ZhYzItYjA4My00YzNkLTkxZjItNjEwYmY3N2I1NjYxXkEyXkFqcGc@._V1_.jpg" },
    { name: "Dhruvangal 16 (D16)", genre: "Mystery Thriller", release: "2016-12-29", rating: "8.3", director: "Karthick Naren", hero: "Rahman", heroine: "Prakash Raghavan", music: "Jakes Bejoy", synopsis: "A retired cop recalls a case that changed his life; a gripping procedural.", trailer: "https://www.youtube.com/watch?v=5bT4VL2ZR3w", poster: "https://m.media-amazon.com/images/M/MV5BMjQ1YzA1NTgtY2ZkNy00M2Y0LTg2YTYtZTRjZjZiY2JjMzYzXkEyXkFqcGc@._V1_.jpg" },
    { name: "Anjaam Pathiraa (Malayalam)", genre: "Crime Thriller", release: "2020-02-28", rating: "8.1", director: "Midhun Manuel Thomas", hero: "Kunchacko Boban", heroine: "Unnimaya Prasad", music: "Sushin Shyam", synopsis: "A profiler helps police hunt a serial killer targeting young men.", trailer: "https://www.youtube.com/watch?v=7H1eX2e3hH0", poster: "https://m.media-amazon.com/images/M/MV5BMTY0NjA3MjYyOF5BMl5BanBnXkFtZTgwMzk4NzY3NzM@._V1_.jpg" },
    { name: "Memories (Malayalam)", genre: "Psychological Thriller", release: "2013-07-12", rating: "7.6", director: "Jeethu Joseph", hero: "Prithviraj Sukumaran", heroine: "Gowri Munjal", music: "Deepak Dev", synopsis: "A police officer known for solving crimes falls into a dark spiral when personal tragedy strikes.", trailer: "https://www.youtube.com/watch?v=2J6xGZ1YD_A", poster: "https://m.media-amazon.com/images/M/MV5BMjA2ZDIyZGItMGUwYy00YzAxLWJjNDAtMjM2MTg1ODdkN2E5XkEyXkFqcGc@._V1_.jpg" },
    { name: "Agent Sai Srinivasa Athreya", genre: "Crime Comedy Thriller", release: "2019-02-01", rating: "8.2", director: "Swaroop RSJ", hero: "Naveen Polishetty", heroine: "Shruti Sharma", music: "Mark K. Robin", synopsis: "A rookie detective runs a quirky agency and stumbles into a major conspiracy.", trailer: "https://www.youtube.com/watch?v=QGkz5Zt2WXA", poster: "https://m.media-amazon.com/images/M/MV5BMTY4NjY5MjU1Ml5BMl5BanBnXkFtZTgwNzY2MTEyNzM@._V1_.jpg" }
  ];

  // ---------- Cast pools (grouped by category) ----------
  const pools = {
    heroes: [...new Set(MOVIES.map(m => m.hero).filter(Boolean))].sort(),
    heroines: [...new Set(MOVIES.map(m => m.heroine).filter(Boolean))].sort(),
    directors: [...new Set(MOVIES.map(m => m.director).filter(Boolean))].sort(),
    music: [...new Set(MOVIES.map(m => m.music).filter(Boolean))].sort()
  };

  // ---------- State ----------
  const state = {
    user: null,
    prefs: { heroes: new Set(), heroines: new Set(), directors: new Set(), music: new Set() },
    search: ''
  };

  // ---------- Elements ----------
  const loginPage = document.getElementById('loginPage');
  const castPage = document.getElementById('castPage');
  const recommendPage = document.getElementById('recommendPage');

  const usernameEl = document.getElementById('username');
  const passwordEl = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');

  const heroesGroup = document.getElementById('heroesGroup');
  const heroinesGroup = document.getElementById('heroinesGroup');
  const directorsGroup = document.getElementById('directorsGroup');
  const musicGroup = document.getElementById('musicGroup');
  const prefsNext = document.getElementById('prefsNext');
  const backToLogin = document.getElementById('backToLogin');

  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const moviesGrid = document.getElementById('moviesGrid');
  const resultsMeta = document.getElementById('resultsMeta');
  const backToCast = document.getElementById('backToCast');
  const logoutBtn = document.getElementById('logoutBtn');

  const modal = document.getElementById('movieModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalSynopsis = document.getElementById('modalSynopsis');
  const trailerBtn = document.getElementById('trailerBtn');

  // ---------- Helpers ----------
  const el = sel => document.querySelector(sel);
  function show(sectionId) {
    loginPage.classList.toggle('active', sectionId === 'login');
    castPage.classList.toggle('active', sectionId === 'prefs');
    recommendPage.classList.toggle('active', sectionId === 'home');
  }

  function saveSession() {
    const data = {
      user: state.user,
      prefs: {
        heroes: [...state.prefs.heroes],
        heroines: [...state.prefs.heroines],
        directors: [...state.prefs.directors],
        music: [...state.prefs.music]
      }
    };
    localStorage.setItem('movieFright.session', JSON.stringify(data));
  }
  function loadSession() {
    try {
      const raw = localStorage.getItem('movieFright.session');
      if (!raw) return;
      const s = JSON.parse(raw);
      state.user = s.user || null;
      if (s.prefs) {
        state.prefs.heroes = new Set(s.prefs.heroes || []);
        state.prefs.heroines = new Set(s.prefs.heroines || []);
        state.prefs.directors = new Set(s.prefs.directors || []);
        state.prefs.music = new Set(s.prefs.music || []);
      }
    } catch (e) { console.warn('Session load failed', e); }
  }

  // Create pill
  function createChip(name, setRef) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip' + (setRef.has(name) ? ' selected' : '');
    btn.textContent = name;
    btn.addEventListener('click', () => {
      if (setRef.has(name)) { setRef.delete(name); btn.classList.remove('selected'); }
      else { setRef.add(name); btn.classList.add('selected'); }
      validatePrefsNext();
      saveSession();
    });
    return btn;
  }

  // Render pool groups
  function renderPools() {
    heroesGroup.innerHTML = ''; heroinesGroup.innerHTML = ''; directorsGroup.innerHTML = ''; musicGroup.innerHTML = '';
    pools.heroes.forEach(h => heroesGroup.appendChild(createChip(h, state.prefs.heroes)));
    pools.heroines.forEach(h => heroinesGroup.appendChild(createChip(h, state.prefs.heroines)));
    pools.directors.forEach(d => directorsGroup.appendChild(createChip(d, state.prefs.directors)));
    pools.music.forEach(m => musicGroup.appendChild(createChip(m, state.prefs.music)));
    validatePrefsNext();
  }

  function validatePrefsNext() {
    const total = state.prefs.heroes.size + state.prefs.heroines.size + state.prefs.directors.size + state.prefs.music.size;
    prefsNext.disabled = total === 0;
  }

  // Scoring by preferences (higher score when matched)
  function scoreByPrefs(m) {
    let s = 0;
    if (state.prefs.directors.has(m.director)) s += 4;
    if (state.prefs.heroes.has(m.hero)) s += 3;
    if (state.prefs.heroines.has(m.heroine)) s += 2;
    if (state.prefs.music.has(m.music)) s += 1;
    return s;
  }

  // Poster placeholder fallback
  function posterImg(url, title) {
    if (!url) return `<div class="poster" style="display:flex;align-items:center;justify-content:center;font-weight:800;">${title.split(' ').slice(0,2).map(w=>w[0]).join('')}</div>`;
    return `<img src="${url}" loading="lazy" alt="${title} poster" class="poster" onerror="this.onerror=null;this.src='';this.style.background='#111';" />`;
  }

  // Render movies list (based on search + prefs)
  function renderMovies() {
    const q = state.search.trim().toLowerCase();
    const withScore = MOVIES.map(m => ({ m, score: scoreByPrefs(m) }));
    let filtered = withScore.filter(({ m }) => {
      const hay = `${m.name} ${m.genre} ${m.director} ${m.hero} ${m.heroine} ${m.music} ${m.synopsis}`.toLowerCase();
      if (q && !hay.includes(q)) return false;
      // If user selected prefs, require at least one matching pref for relevance
      const hasPref = state.prefs.heroes.size + state.prefs.heroines.size + state.prefs.directors.size + state.prefs.music.size > 0;
      if (!hasPref) return true;
      // check if movie matches any chosen pref
      const match = [...state.prefs.heroes].some(x => m.hero && m.hero.toLowerCase().includes(x.toLowerCase()))
        || [...state.prefs.heroines].some(x => m.heroine && m.heroine.toLowerCase().includes(x.toLowerCase()))
        || [...state.prefs.directors].some(x => m.director && m.director.toLowerCase().includes(x.toLowerCase()))
        || [...state.prefs.music].some(x => m.music && m.music.toLowerCase().includes(x.toLowerCase()));
      return match;
    });

    // Sort: score desc, rating desc, date desc
    filtered.sort((a, b) => b.score - a.score || parseFloat(b.m.rating) - parseFloat(a.m.rating) || new Date(b.m.release) - new Date(a.m.release));

    moviesGrid.innerHTML = '';
    if (filtered.length === 0) {
      moviesGrid.innerHTML = `<div class="muted">No movies found. Try different cast selections or search terms.</div>`;
      resultsMeta.textContent = `0 of ${MOVIES.length} movies`;
      return;
    }

    filtered.forEach(({ m }) => {
      const node = document.createElement('div');
      node.className = 'movie';
      node.innerHTML = `
        ${posterImg(m.poster, m.name)}
        <div class="title">${m.name}</div>
        <div class="meta">${m.genre} • ${new Date(m.release).getFullYear()} • IMDb ${m.rating}</div>
        <div class="meta">Director: ${m.director} • Hero: ${m.hero}${m.heroine && m.heroine !== '—' ? ' • Heroine: ' + m.heroine : ''}</div>
        <div class="synopsis">${m.synopsis}</div>
      `;
      node.addEventListener('click', () => openMovie(m));
      moviesGrid.appendChild(node);
    });

    resultsMeta.textContent = `${filtered.length} of ${MOVIES.length} movies`;
  }

  // Open movie modal
  function openMovie(m) {
    modalTitle.textContent = m.name;
    modalMeta.textContent = `${m.genre} • ${new Date(m.release).toLocaleDateString()} • IMDb ${m.rating} • Director: ${m.director}`;
    modalSynopsis.textContent = m.synopsis;
    trailerBtn.href = m.trailer || '#';
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  // ---------- Events ----------
  loginBtn.addEventListener('click', () => {
    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();
    if (!username || !password) return alert('Please enter username and password.');
    state.user = { name: username };
    saveSession();
    renderPools();
    show('prefs');
  });

  backToLogin.addEventListener('click', () => {
    show('login');
  });

  prefsNext.addEventListener('click', () => {
    saveSession();
    renderMovies();
    show('home');
  });

  backToCast.addEventListener('click', () => {
    show('prefs');
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('movieFright.session');
    state.user = null;
    state.prefs = { heroes: new Set(), heroines: new Set(), directors: new Set(), music: new Set() };
    usernameEl.value = '';
    passwordEl.value = '';
    searchInput.value = '';
    state.search = '';
    renderPools();
    renderMovies();
    show('login');
  });

  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    renderMovies();
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    renderMovies();
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (ev) => { if (ev.target === modal) closeModal(); });

  // ---------- Init ----------
  loadSession();
  renderPools(); // populate chips
  // If user exists and prefs already set, jump to home
  const totalPrefs = state.prefs.heroes.size + state.prefs.heroines.size + state.prefs.directors.size + state.prefs.music.size;
  if (state.user && totalPrefs > 0) {
    renderMovies(); show('home');
  } else if (state.user) {
    renderPools(); show('prefs');
  } else {
    show('login');
  }
});

