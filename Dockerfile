FROM php:7.3-apache 

# Install dependencies and extensions
RUN apt-get update && apt-get install -y \
    libzip-dev \
    libc-client-dev \
    libkrb5-dev \
    calendar \
    exif \
    zip \
    && docker-php-ext-configure imap --with-kerberos --with-imap-ssl && docker-php-ext-install mysqli pdo pdo_mysql zip imap opcache

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the production version of php.ini to be used in the container. 
# You can remove this line if you prefer the standard PHP configuration.
RUN cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini


# Update php.ini Settings
RUN sed -E -i -e 's/max_execution_time = 30/max_execution_time = 120/' /usr/local/etc/php/php.ini \
    && sed -E -i -e 's/memory_limit = 128M/memory_limit = 512M/' /usr/local/etc/php/php.ini \
    && sed -E -i -e 's/post_max_size = 8M/post_max_size = 512M/' /usr/local/etc/php/php.ini \
    && sed -E -i -e 's/upload_max_filesize = 2M/upload_max_filesize = 10M/' /usr/local/etc/php/php.ini

# Enable htaccess
RUN a2enmod rewrite

#To get the service of rewrite, we are restarting apache
RUN apachectl restart

# Create directory structure
RUN mkdir e2e-ui 

# Copy existing application directory contents
COPY . /e2e-ui

RUN cp -r /e2e-ui/* /var/www/html/e2e-ui

# Add group write access to `e2e`
RUN chmod -R 777 /var/www/html

# Install Composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory for composer (Contains the composer.json file)
# WORKDIR /var/www/html/e2e/poorvika

# Run Composer
# RUN composer install
