import React, { useState, useTransition, memo, Fragment, useEffect } from 'react';

export function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');
  const [del, setDel] = useState(true);

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
    // setTab(nextTab);
  }

  return (
    <Fragment>
      {<button onClick={ () => setDel(false)}>Delelte</button> }
      {del && <Test></Test>}
      <br/>
      <TabButton
        isActive={tab === 'about'}
        onClick={() => selectTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        onClick={() => selectTab('posts')}
      >
        Posts (slow) {isPending && 'pending...'}
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </Fragment>
  );
}

function Test ({}) {
  useEffect(() => {
    console.log('mount test')
    return () => {
      console.log('un-mount test')
    }
  }, [])
  console.log('render test')
  return 'test'
}

function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <b>{children}</b>
  }
  return (
    <button onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}

function AboutTab() {
  return (
    <p>Welcome to my profile!</p>
  );
}

const PostsTab = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 1000; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

function ContactTab() {
  return (
    <Fragment>
      <p>
        You can find me online here:
      </p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </Fragment>
  );
}
