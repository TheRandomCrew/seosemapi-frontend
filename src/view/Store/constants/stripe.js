const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_E6QLt5JutCJ9GIdckZFE3Yet00QSA2IvEK'
  : 'pk_test_LkUEiFADRw9eseawP7xdvpji00lqUymi2L';//isra

export default STRIPE_PUBLISHABLE;
