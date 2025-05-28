# starting postgres manually
$HOME/pgsql/bin/pg_ctl -D $HOME/pgsql/data start

# connect with psql
$HOME/pgsql/bin/psql -U rotieno -d postgres